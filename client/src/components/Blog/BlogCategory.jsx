/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionRegular from "../SectionRegular";
import { theme } from "../../helpers/theme";
// import Article from "./Article";
import { useTranslation } from "react-i18next";
import ArticlePreview from "./ArticlePreview";

const BlogCategory = ({ category }) => {
  const ns = `blog/${category.path}`;
  const { t, i18n } = useTranslation(ns);
  const [isCutDescription, setIsCutDescription] = useState(true);

  useEffect(() => {
    i18n.loadNamespaces(ns); // подгружаем нужный namespace
  }, [ns, i18n]);

  const articles = t("articles", { returnObjects: true });

  return (
    <SectionRegular key={category.label} id={category.path}>
      <h3 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>
        {category.label}
      </h3>
      {isCutDescription && <p className="leading-relaxed tracking-wide text-gray-700 text-xl my-4">{category.description}</p>}

      {!isCutDescription && (
        <div className="grid gap-6 mt-6 md:grid-cols-2">
          {Object.entries(articles).map(([id, article]) => (
            <ArticlePreview
              key={id}
              id={id}
              title={article.title}
              content={article.content}
              categoryPath={category.path}
            />
          ))}
        </div>
      )}

      <div className="flex justify-end w-full mt-4">
        <button
          onClick={() => setIsCutDescription(!isCutDescription)}
          className={`${theme.buttonmy} px-4 py-2 rounded`}
        >
          {isCutDescription ? t("leermas") : t("leermenos")}
        </button>
      </div>
    </SectionRegular>
  );
};

export default BlogCategory;




{/* <SectionRegular key={category.label} id={category.path}>
      <h3 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>
        {category.label}
      </h3>
      {isCutDescription && <p className="leading-relaxed tracking-wide text-gray-700 text-xl my-4">{category.description}</p>}

      {!isCutDescription && (
        <div className="space-y-4 mt-6">
          {Object.entries(articles).map(([id, article]) => (
            <Article key={id} id={id} title={article.title} content={article.content} />
          ))}
        </div>
      )}

      <div className="flex justify-end w-full mt-4 md:mt-0">
        <button
          onClick={() => setIsCutDescription(!isCutDescription)}
          className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-4 py-2 rounded"
        >
          {isCutDescription ? t("leermas") : t("leermeno")}
        </button>
      </div>
    </SectionRegular> */}
