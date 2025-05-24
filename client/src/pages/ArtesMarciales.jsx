import ContainerMain from "../components/ContainerMain";
import { theme } from "../helpers/theme"
import { FaFistRaised } from "react-icons/fa";
// import { Swiper, SwiperSlide } from 'swiper/react';

export const ArtesMarciales = () => {
  const benefits = [
    "Mejora la irrigación, el volumen cardíaco y la función ventricular. Aumenta la circulación periférica y cerebral y regula la presión arterial.",
    "Regula el ritmo y aumenta el volumen de ventilación pulmonar y ventilación alveolar.",
    "Mejora la función gastrocólica, regula y fortalece la perístasis y tonifica el páncreas y el hígado.",
    "Protege la corteza cerebral a través de un mecanismo inhibitorio, regula el sistema nervioso vegetativo y aumenta la tolerancia al dolor.",
    "Regula y mejora las funciones endocrinas, glándula hipófisis, tiroides, testiculares, ováricas, suprarrenales y pancreáticas.",
    "Aumenta el número y capacidad de linfocitos T y aumenta las inmunoglobulinas, el número y actividad de los macrófagos.",
    "Fortalece huesos, incrementa la masa muscular y aumenta la elasticidad de músculos y tendones.",
    "Activa y regula el metabolismo de lípidos y azúcares."
  ];

  // const martialArtsIcons = [
  //   "/icons/karate.png",
  //   "/icons/taekwondo.png",
  //   "/icons/judo.png",
  //   "/icons/muaythai.png",
  //   "/icons/kungfu.png",
  //   "/icons/boxing.png"
  // ];

  return (
    <ContainerMain className={`${theme.background} p-8`}>
      {/* <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Estilos de Artes Marciales</h2>
        <Swiper spaceBetween={10} slidesPerView={3} loop={true} className="flex justify-center ">
          {martialArtsIcons.map((icon, index) => (
            <SwiperSlide key={index} className="flex justify-center flex-row max-w-screen">
              <img src={icon} alt={`Martial art ${index}`} className="w-20 h-20 rounded-full shadow-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <img
        src='/img/artes-marc.png'
        alt="Niños practicando artes marciales"
        className="my-4 h-[60vh] w-auto rounded-lg shadow-lg"
      />
      <section className={`${theme.primary} p-6 rounded-lg`}>
        <h1 className="text-5xl font-semibold text-white text-center">Artes marciales con Amaruk Kaishapanta</h1>
        <p>Taekwondo, Hapkido, Jut Jitsu, Kick Boxing, Full Contack, Judo </p>
        <p className="mt-2 text-lg">Las Artes Marciales son, principalmente, un sistema de defensa personal y un gran método para ganar autoconfianza.</p>
        <p>En un buen entrenamiento de Artes Marciales se puede aumentar la confianza en sí mismo y a su vez, reducir la sensación de vulnerabilidad. Estar bien preparado puede ayudar a evitar el peligro, ya que la confianza permite mantener la calma en situaciones complejas.</p>
        <p>En la actualidad las artes marciales se practican por diferentes razones, que incluyen la salud, la protección personal, el desarrollo personal, la disciplina mental, la forja del carácter y la autoconfianza. Nuestro centro de Artes Marciales Amaruk Kaishapanta ofrece una excelente oportunidad para que puedas aprender en un ambiente divertido, seguro y muy emocionante.</p>
        <h2 className="text-3xl font-bold m-6 text-center">Beneficios de las Artes Marciales</h2>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg shadow-md">
              <FaFistRaised className="text-red-500 text-2xl flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

      </section>
    </ContainerMain>
  )
}
