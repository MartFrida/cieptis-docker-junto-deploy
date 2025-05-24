/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme";
import { useTranslation } from "react-i18next";

const CVModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center backdrop-blur-sm z-50 rounded-lg">
      <div className={`${theme.background} shadow-md rounded-lg md:w-2/3 py-2 m-2 relative max-h-[90vh] overflow-hidden`}>
        <div className="max-h-full md:max-h-[80vh] overflow-y-auto relative " onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-white z-20" onClick={onClose}>X</button>
          <h2 className={`${theme.primary} text-xl md:text-2xl p-4 absolute top-0 w-full`}>AMARUK KAYSHAPANTA</h2>

          <div className={`${theme.text} p-2 md:p-6 mt-20`}>
            <div className="float-right ml-2 mb-2 md:ml-4 md:mb-4">
              <img
                src="img/equipo/cv-foto.jpg"
                alt="Amaruk Kayshapanta"
                className="h-30 w-30 md:h-60 md:w-60 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2">{t("home.fundador.cv.titleFormacion")}</h3>
            <ul className="flex flex-col gap-y-2">
              {t("home.fundador.cv.listFormacion", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold my-2">{t("home.fundador.cv.titleExperiencia")}</h3>
            <ul className="flex flex-col gap-y-2">
              {t("home.fundador.cv.listExperiencia", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className={`${theme.primary} w-fit mx-auto mt-4 p-2 rounded-lg`}>
              <a href="https://en.wikipedia.org/wiki/Amaruk_Kayshapanta" target="_blank" >{t("home.fundador.cv.masInfoBtn")}</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
