import { useState } from 'react';
import SectionRegular from '../components/SectionRegular';
import { theme } from '../helpers/theme';
import ContainerMain from '../components/ContainerMain'
import TeamSection from '../components/TeamSection';
import ContactModal from '../components/ContactModal';
import { useTranslation } from "react-i18next";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const listOffer = t('home.offer.list', { returnObjects: true });
  const listPorque = t('home.porque.list', { returnObjects: true });

  return (
    <ContainerMain >
      <section className="relative rounded-lg">
        <div className=" flex justify-center flex-col bg-fixed bg-no-repeat bg-top bg-cover md:bg-contain h-screen mt-[-50px] mb:mt-[-20px]"
          style={{ backgroundImage: "url('/img/amaruk-hero-smc.webp')" }}>
          <div className='bg-zinc-900/60 p-4 md:p-8 rounded-lg'>
            <h1 className=" tracking-widest text-5xl md:text-7xl font-bold leading-relaxed text-center text-white"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              CIEPTIS
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold leading-relaxed tracking-wide text-center text-white"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              {t("home.title")}
              {/* CENTRO DE ENTRENADORES PERSONALES Y TERAPIAS INTEGRALES DE LA SALUD */}
            </h2>
            <p className="text-xl md:text-2xl mt-4 text-center text-white" style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9)" }}>
              {t("home.description")}
            </p>
          </div>
        </div>
      </section>

      <div className={`${theme.text} flex flex-col gap-4`}>
        <SectionRegular>

          <p className="mb-6 text-xl font-bold text-gray-900 text-center">
            {t("home.welcome.title")}
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-center">
            {t("home.welcome.paragraf1")}
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-center">
            {t("home.welcome.paragraf2")}
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-center">
            {t("home.welcome.paragraf3")}
          </p>

          <p className="mt-8 text-xl font-bold text-gray-900 text-center">
            {t("home.welcome.final")} 🌟
          </p>

          <div className='flex justify-end w-full mt-4 md:mt-0'>
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
              onClick={() => setIsModalOpen(true)}>
              {t("actionBtn")}
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </SectionRegular>

        <SectionRegular>
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>{t("home.offer.title")}</h2>
          <ul className="list-disc pl-6 mt-4 md:my-6">
            {listOffer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SectionRegular>

        <TeamSection />

        <SectionRegular>
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>{t("home.porque.title")}</h2>
          <div className='flex flex-col lg:flex-row my-4 gap-4 '>
            <ul className=" list-inside list-decimal my-4 md:pl-6 list-none">
              {listPorque.map((item, index) => (
                <li key={index}>✔️ {item}</li>
              ))}
            </ul>
            <div className="grow-3 justify-items-end">
              <img
                src="/img/amaruk-elegir-nosotros.jpg"
                alt='Training Image'
                className='rounded-lg shadow-lg max-h-[59vh] object-cover'
              />
            </div>
          </div>

        </SectionRegular>

        <SectionRegular className="mt-8">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>{t("home.programas.title")}</h2>
          <div className='flex flex-col lg:flex-row my-4 gap-4'>
            <div>
              <h3 className="text-xl font-semibold py-4 ">{t("home.programas.part1.subtitle")}</h3>
              <p>{t("home.programas.part1.listDescription")}</p>
              <ul className="list-inside list-disc md:pl-6 list-none">
                {(t('home.programas.part1.list', { returnObjects: true })).map((item, index) => (
                  <li key={index}>✔️ {item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold py-4 ">{t("home.programas.part2.subtitle")}</h3>
              <p>{t("home.programas.part2.listDescription")}</p>
              <ul className="list-inside list-disc md:pl-6 list-none">
                {(t('home.programas.part2.list', { returnObjects: true })).map((item, index) => (
                  <li key={index}>✔️ {item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold py-4 ">{t("home.programas.part3.subtitle")}</h3>
              <p>{t("home.programas.part3.listDescription")}</p>
              <ul className="list-inside list-disc md:pl-6 list-none">
                {(t('home.programas.part3.list', { returnObjects: true })).map((item, index) => (
                  <li key={index}>✔️ {item}</li>
                ))}
              </ul>
            </div>
            <div className="grow-3 justify-items-end">
              <img
                src="/img/amaruk-hero-end.jpg"
                alt='Training Image'
                className='rounded-lg shadow-lg max-h-[59vh] object-cover'
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold py-4 ">{t("home.programas.fintitle")}</h3>
            <p>{t("home.programas.finDescription")}</p>
            <p>📍 {t("home.programas.finCall")}</p>
          </div>
          <div className='flex justify-end w-full mt-4 md:mt-0'>
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
              onClick={() => setIsModalOpen(true)}>
              {t("actionBtn")}
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </SectionRegular>

      </div >
    </ContainerMain >
  )
}

export default Home