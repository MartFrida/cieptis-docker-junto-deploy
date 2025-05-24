import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Позволяет загружать JSON файлы
  .use(initReactI18next)
  .use(LanguageDetector)

  .init({
    lng: "es",
    fallbackLng: "es",
    backend: {
      allowMultiLoading: true, // Разрешаем загружать из нескольких путей
      loadPath: (lng, ns) => {
        if (!ns) return `/locales/${lng}/common.json`; // Защита от undefined/null
        const namespace = Array.isArray(ns) ? ns[0] : ns; // Приводим `ns` к строке
        if (typeof namespace !== "string") return `/locales/${lng}/common.json`; // Проверяем, что это строка

        if (namespace.startsWith("blog/")) {
          return `/locales/${lng}/blog/${namespace.replace("blog/", "")}.json`; // Путь для блога
        }
        return `/locales/${lng}/${namespace}.json`; // Путь для остальных
      },
    },
    ns: ["common", "claces-infantiles", "nutrition-data", "personal-training-data", "tarifas", "blog", "blog/common", "blog/topics", "blog/entrenamiento", "blog/vidaFitInBCN", "blog/therapy", "blog/nutrition", "blog/miniGuerrreros"], // Названия файлов
    defaultNS: "common", // Пространство имен по умолчанию
    interpolation: { escapeValue: false },
  }).then(() => {
    i18n.addResourceBundle("es", "common", {
      personalTraining: "Entrenador Personal",
      clasesInfantiles: "Clases Infantiles",
      nutrition: "Nutrition",
      tarifas: "Tarifas",
      blog: "Blog"
    });
  });;

export default i18n;
