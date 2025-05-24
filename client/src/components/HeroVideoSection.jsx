/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme";

export default function HeroVideoSection({ videoHero, title }) {

  return (
    <section className={`relative w-full md:h-screen flex items-center justify-center ${theme.secondary} rounded-lg`}>
      {/* Видео фон */}
      <video
        className="absolute top-0 left-0 w-full h-64 md:h-full object-cover rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoHero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Затемнение для читаемости текста */}
      <div className=" absolute top-0 left-0 h-64 md:h-full inset-0 bg-gray-950/50 md:bg-gray-950/85 rounded-lg"></div>

      {/* Контент */}
      <div className="relative h-64 text-center align-middle text-white px-6">
        <h1 className="text-4xl leading-relax md:text-5xl lg:text-6xl font-bold tracking-wide mt-8" style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>{title}</h1>

      </div>
    </section>
  );
}
