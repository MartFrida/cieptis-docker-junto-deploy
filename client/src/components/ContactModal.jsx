/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { theme } from "../helpers/theme";
import { useTranslation } from "react-i18next";

const ContactModal = ({ isOpen, onClose, sectionId }) => {

  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    contactMethod: "phone",
    timeRange: "9:00 - 12:00",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Блокируем скролл
    } else {
      document.body.classList.remove("overflow-hidden"); // Разрешаем скролл
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Очистка при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;


  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Introducir correo electrónico';
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Formato de correo incorrecto (ejemplo: ejemplo@mail.com)';
      }
    }
    if (!formData.phone) {
      newErrors.phone = 'Introduce tu número de teléfono';
    } else {
      const phonePattern = /^\+?[0-9]{10,15}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = 'Formato de teléfono incorrecto';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone,
      contact_method: formData.contactMethod,
      time_range: formData.timeRange,
      location: window.location.href,
      section_id: sectionId || 'unknown',
    };

    emailjs.send(serviceId, templateID, templateParams, publicKey)
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", phone: "", email: "", message: "", contactMethod: "phone", timeRange: "9:00 - 12:00" });
        setTimeout(() => {
          setIsSent(false),
            onClose()
        }, 3000);
      })
      .catch((err) => console.error('FAILED...', err));
  };

  if (!isOpen) return null;

  return (

    <div className={`${theme.primary} text-white max-w-md p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto`}>
      <button className="absolute top-2 right-2 text-white" onClick={onClose ? onClose : undefined}>✖</button>
      <h2 className="text-2xl font-bold mb-4">{t("actionBtn")}</h2>
      {isSent && <p className="text-green-600 mb-4">{t("contactForm.isSent")}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t("contactForm.inputName")} className="w-full p-2 mb-2 border rounded-md" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t("contactForm.inputEmail")} className="w-full p-2 mb-2 border rounded-md" required />
        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t("contactForm.inputPhone")} className="w-full p-2 mb-2 border rounded-md" required />
        {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t("contactForm.inputMessage")} className="w-full p-2 mb-2 border rounded-md" rows="4" />

        <label className="block mb-2">{t("contactForm.methodCommunication")}</label>
        <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md bg-gray-800 text-white">
          <option value="phone">{t("contactForm.methodComTel")}</option>
          <option value="sms">{t("contactForm.methodComWrite")}</option>
          <option value="email">{t("contactForm.methodComEmail")}</option>
        </select>

        <label className="block mb-2">{t("contactForm.choiseHorary")}</label>
        <select name="timeRange" value={formData.timeRange} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md bg-gray-800 text-white">
          <option value="9:00 - 12:00" >9:00 - 12:00</option>
          <option value="12:00 - 15:00">12:00 - 15:00</option>
          <option value="15:00 - 18:00">15:00 - 18:00</option>
          <option value="18:00 - 21:00">18:00 - 21:00</option>
          <option value="asap">{t("contactForm.choiseAntes")}</option>
        </select>

        <button type="submit" className="mx-auto block py-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white">{t("contactForm.sendBtn")}</button>
      </form>
    </div>

  );
};

export default ContactModal;
