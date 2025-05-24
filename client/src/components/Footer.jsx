import { theme } from "../helpers/theme";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Логотип */}
        <div className="mb-6 md:mb-0 hover:scale-110 transition duration-200 flex justify-center md:justify-start">
          <Link to="/" className={`${theme.text} rounded text-xl flex flex-col items-center`}>
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            <p>CIEPTIS</p>
          </Link>
        </div>

        {/* Сервисы */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">{t("servicios")}</h3>
          <ul className="mt-2 space-y-1">
            <li><Link to="/entrenador-personal" className="hover:underline">{t("personalTraining")}</Link></li>
            <li><Link to="/clases-infantiles" className="hover:underline">{t("clasesInfantiles")}</Link></li>
            <li><Link to="/nutrition" className="hover:underline">{t("nutrition")}</Link></li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="text-lg font-semibold">{t("actionBtn")}</h3>
          <ul className="mt-2 space-y-1">
            <li className="flex justify-center md:justify-start items-center">
              <a href="tel:+34696869949" className="flex flex-row items-center"> <FaPhone className="mr-2" /> +34 696 869 949</a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <a href="mailto:cieptis.atencion@gmail.com" className="flex flex-row items-center">
                <FaEnvelope className="mr-2" /> cieptis.atencion@gmail.com</a>
            </li>
            <li className="flex justify-center md:justify-start items-center"><FaMapMarkerAlt className="mr-2" /> Barcelona, España</li>
          </ul>
        </div>
      </div>

      {/* Социальные сети */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.facebook.com/share/1BkKFsVxPq/" target="_blank" className="text-white text-xl hover:text-gray-400" aria-disabled="true"><FaFacebook /></a>
        <a href="https://www.instagram.com/personal_training_bcn?utm_source=qr&igsh=MWE0bGRoeG0zNm0ycg==" target="_blank" className="text-white text-xl hover:text-gray-400" aria-label="Follow us on Instagram"><FaInstagram /></a>
        <a href="javascript:void(0);" target="_blank" className="text-white text-xl hover:text-gray-400" aria-disabled="true"><FaTwitter /></a>
        <a href="javascript:void(0);" target="_blank" className="text-white text-xl hover:text-gray-400" aria-disabled="true"><FaWhatsapp /></a>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} {t("home.title")}</p>
        {/* <p> Reservados todos los derechos</p> */}
      </div>
    </footer>
  );
};

export default Footer;
