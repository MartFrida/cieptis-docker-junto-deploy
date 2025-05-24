import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Или любая другая иконка
import { theme } from "../helpers/theme";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${theme.buttonmy} fixed bottom-24 right-6  p-3 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
