/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { useState } from "react"
import { theme } from "../helpers/theme"
import ContactDropdown from "./ContactDropdown";

export const InfoSection = ({ title, description, items, callToAction, imageUrl }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idElem, setIdElem] = useState()

  const handleClick = (event) => {
    const section = event.target.closest('[id]'); // Найдёт ближайший родительский элемент с id
    setIdElem(section ? section.id : 'Не найдено')
  };

  return (
    <div className="relative">
      <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>
        {title}
      </h2>

      <div className="my-4 gap-4">
        {imageUrl && (
          <div className="lg:float-right w-100% m-0 lg:ml-4 mb-2 lg:w-[300px] h-64">
            <img
              src={`${imageUrl}`}
              alt='Training Image'
              className='rounded-lg shadow-lg w-full h-full object-cover'
            />
          </div>
        )}

        <p className="leading-relaxed tracking-wide text-gray-700">
          {description}
        </p>
        <ul className="list-disc text-gray-700 list-none">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="leading-relaxed tracking-wide mb-4 text-gray-700">
        {callToAction}
      </p>

      <div className="flex justify-end w-full">
        <button
          className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
          onClick={(ev) => {
            handleClick(ev);
            setIsModalOpen(true);
          }}
        >
          {t("actionBtn")}
        </button>
        {isModalOpen && <ContactDropdown isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sectionID={idElem} />}
      </div>
    </div>
  );
};
