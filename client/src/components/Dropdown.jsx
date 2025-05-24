/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { theme } from "../helpers/theme";
import { useTranslation } from "react-i18next";

const Dropdown = ({ titleKey, links, mainPath, onItemClick }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Хук для программного перехода

  const handleItemClick = () => {
    setOpen(false); // Закрываем вложенный список
    if (onItemClick) onItemClick(); // Закрываем главное меню
  };

  const handleToggle = () => {
    setOpen(!open);
    navigate(mainPath); // Переход на основной путь при клике на стрелку
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${theme.text} ${theme.hover} rounded relative`} ref={dropdownRef}>
      <button
        aria-label="arrowMenu"
        onClick={handleToggle}
        className="p-2 rounded flex items-center focus:outline-none"
      >
        <span className="mr-2 text-white">{t(titleKey)}</span>
        {open ? (
          <FaChevronUp className="text-white bg-transparent" />
        ) : (
          <FaChevronDown className="text-white bg-transparent" />
        )}
      </button>
      {open && (
        <div className={`${theme.primary}  absolute right-0 mt-2 rounded shadow-lg w-48 max-h-[80vh] overflow-y-auto `}>
          {links.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className="block px-4 pb-2 md:py-2 bg-transparent hover:bg-gray-800"
              onClick={handleItemClick}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown