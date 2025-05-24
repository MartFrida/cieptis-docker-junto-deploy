import { useState } from 'react';
import SectionRegular from "./SectionRegular";
import { theme } from "../helpers/theme";
import CVModal from "./CVModal";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const trainers = t('home.equipo', { returnObjects: true });

  return (
    <>
      {/* founder */}
      <section className={`${theme.primary}  p-4 rounded-lg mb-8 `}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <div className="text-center md:text-left py-4 lg:p-6">
              <p className="text-xl italic mb-4">
                &quot;{t("home.fundador.quote")}&quot;
              </p>
              <h3 className="text-lg font-semibold "> – Amaruk Kaishapanta, Founder & CEO</h3>
            </div>

            <button className="m-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
              onClick={openModal}>
              {t("home.fundador.button")}
            </button>
            <CVModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/img/equipo/founder.jpg"
              alt="Amaruk Kaishapanta"
              className="rounded-lg shadow-lg max-h-[59vh] object-cover"
            />
          </div>
        </div>
      </section>
      <SectionRegular>
        <div className="container mx-auto text-center">
          <h2 className={`${theme.primary} text-3xl p-4 rounded-lg mb-8`}>
            {t("home.equipoTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 text-center hover:shadow-2xl transition"
              >
                <img
                  src={trainer.image}
                  alt={trainer.title}
                  className="w-full h-auto mx-auto object-cover mb-4"
                />
                <p className="text-sm text-gray-500 font-medium">
                  {trainer.title}
                </p>
                <p className="text-gray-600 mt-3 text-sm">{trainer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionRegular>
    </>

  );
};

export default TeamSection;
