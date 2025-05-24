import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { theme } from "../helpers/theme";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню
import { useTranslation } from "react-i18next";
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [namesClacesInfantiles, setNamesClacesInfantiles] = useState({});
  const [namesTrenPersonal, setNamesTrenPersonal] = useState({});
  const [namesNutrition, setNamesNutrition] = useState({});
  const [namesBlog, setNamesBlog] = useState({});

  // Динамическая загрузка JSON при смене языка
  useEffect(() => {
    const loadData = async () => {
      try {
        const [ci, tp, nutrition, blog] = await Promise.all([
          fetch(`/locales/${i18n.language}/claces-infantiles.json`).then(res => res.json()),
          fetch(`/locales/${i18n.language}/personal-training-data.json`).then(res => res.json()),
          fetch(`/locales/${i18n.language}/nutrition-data.json`).then(res => res.json()),
          fetch(`/locales/${i18n.language}/blog/topics.json`).then(res => res.json()),
        ]);
        setNamesClacesInfantiles(ci.offers);
        setNamesTrenPersonal(tp.offers);
        setNamesNutrition(nutrition.offers);
        setNamesBlog(blog)
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    loadData();
  }, [i18n.language]); // Перезагружаем при смене языка

  const createLinks = (data) => {
    if (!data) return []; // Проверка на null или undefined
    return Object.keys(data)
      .map(key => data[key]?.label ? { path: `#${key}`, label: data[key].label } : null)
      .filter(Boolean);
  };

  const linksCI = createLinks(namesClacesInfantiles);
  const linksTP = createLinks(namesTrenPersonal);
  const linksNutrition = createLinks(namesNutrition);
  const linksBlog = createLinks(namesBlog)

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Реф для отслеживания кликов вне меню

  // Функция для закрытия меню
  const handleClose = () => setIsOpen(false);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className={`${theme.primary} p-2 text-white flex justify-between items-center`}>
        {/* Логотип */}
        <Link to="/" className={`${theme.text} rounded text-xl `} onClick={handleClose}>
          <img src="/logo.png" alt="Logo" className="h-16 w-auto hover:scale-120 transition duration-200" />
        </Link>

        <div className="flex flex-row">
          {/* Кнопка бургер-меню для мобильных устройств */}
          <button
            aria-label="burgerMenu"
            className="lg:hidden p-2 focus:outline-none bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Навигация для ПК */}
          <div className="hidden lg:flex space-x-4 items-center">
            <Dropdown titleKey="personalTraining" mainPath="/entrenador-personal" links={linksTP} />
            <Dropdown titleKey="clasesInfantiles" mainPath="/clases-infantiles" links={linksCI} />
            <Dropdown titleKey="nutrition" mainPath="/nutrition" links={linksNutrition} />

            <Dropdown titleKey="blog" mainPath="/blog" links={linksBlog} />
            <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded my-auto mr-2 text-white`}>{t("tarifas")}</Link>
            <Link to="/contacto" className={`${theme.text} ${theme.hover} p-2 rounded my-auto mr-2 text-white`}>{t("actionBtn")}</Link>
            {/* <Link to="/blog/fitness" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
              Fitnes
            </Link> */}
          </div>
          <LanguageSelector />
        </div>
      </nav>

      {/* Выпадающее меню для мобильных устройств */}
      {isOpen && (
        <div ref={menuRef} className={`${theme.primary} lg:hidden flex flex-col items-end p-2 space-y-3 w-auto right-0 absolute`}>
          <Dropdown titleKey="personalTraining" mainPath="/entrenador-personal" links={linksTP} onItemClick={handleClose} />
          <Dropdown titleKey="clasesInfantiles" mainPath="/clases-infantiles" links={linksCI} onItemClick={handleClose} />
          <Dropdown titleKey="nutrition" mainPath="/nutrition" links={linksNutrition} onItemClick={handleClose} />
          <Dropdown titleKey="blog" mainPath="/blog" links={linksBlog} />
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded text-white`} onClick={handleClose}>
            {t("tarifas")}
          </Link>
          <Link to="/contacto" className={`${theme.text} ${theme.hover} p-2 rounded text-white`} onClick={handleClose}>
            {t("actionBtn")}
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;
