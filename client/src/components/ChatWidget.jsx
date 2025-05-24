/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SendHorizonal, ChevronDown, ChevronUp } from "lucide-react";
import { franc } from "franc-min";
import { askQuestion } from "../api/ask";
import { theme } from "../helpers/theme";
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "¡Hola! ¿En qué puedo ayudarte hoy?",
      textEn: "Hello! How can I assist you today?",
      textCa: "Hola! En què puc ajudar-te avui?"
    }
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("es");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const detectLanguage = (text) => {
    const langCode = franc(text);
    if (langCode === "eng") return "en";
    if (langCode === "spa") return "es";
    if (langCode === "cat") return "ca";
    return "es"; // По умолчанию — испанский
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const detectedLang = detectLanguage(input);
    setLanguage(detectedLang);

    const newMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await askQuestion(input, detectedLang);
      const botReply = res.answer;

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: botReply,
          textEn: detectedLang === "en" ? botReply : null,
          textCa: detectedLang === "ca" ? botReply : null
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Lo siento, hubo un error.",
          textEn: "Sorry, something went wrong.",
          textCa: "Ho sento, hi ha hagut un error."
        }
      ]);
      console.error("Error while requesting API:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-6 right-4 w-80 max-w-9/10 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col ">
      <div
        className={`${theme.primary} leading-relaxed text-white p-4 font-bold text-center uppercase cursor-pointer flex justify-between items-center`}
        onClick={toggleOpen}
      >
        <span>Personal Chat</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </div>

      {isOpen && (
        <>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-80">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-xl ${msg.role === "user"
                  ? "bg-gray-100 self-end"
                  : "bg-blue-100 self-start"
                  }`}
              >
                {msg.role === "bot" ? (
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="text-sm text-gray-800" {...props} />
                      ),
                      a: ({ node, ...props }) => (
                        <a
                          className="text-gray-900 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        />
                      )
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>

                ) : (
                  <p className="text-sm text-gray-800">{msg.text}</p>
                )}

              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center p-2 border-t">
            <input
              type="text"
              className={`${theme.text} flex-1 p-2 rounded-xl border focus:outline-none focus:ring focus:border-blue-300 text-sm`}
              placeholder={
                loading
                  ? "Espera..."
                  : language === "ca"
                    ? "Escriu un missatge..."
                    : language === "en"
                      ? "Type a message..."
                      : "Escribe un mensaje..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className={`${theme.buttonmy} ml-2 p-2`}
              disabled={loading}
            >
              <SendHorizonal size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
