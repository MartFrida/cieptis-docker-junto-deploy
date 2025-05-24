import { useEffect, useState } from "react";
import ContainerMain from "../components/ContainerMain";
import { theme } from "../helpers/theme";
import { useTranslation } from "react-i18next";
import BlogCategory from "../components/Blog/BlogCategory";

export const Blog = () => {
  const { i18n } = useTranslation();
  const [categoriesBlog, setcategoriesBlog] = useState({});

  // Динамическая загрузка JSON при смене языка
  useEffect(() => {
    const loadData = async () => {
      try {
        const [blog] = await Promise.all([
          fetch(`/locales/${i18n.language}/blog/topics.json`).then(res => res.json()),
        ]);
        setcategoriesBlog(blog)
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    loadData();
  }, [i18n.language]); // Перезагружаем при смене языка

  const createLinks = (data) => {
    if (!data) return []; // Проверка на null или undefined
    return Object.keys(data)
      .map(key => data[key]?.label ? { path: `${key}`, label: data[key].label, description: data[key].description } : null)
      .filter(Boolean);
  };

  const listBlog = createLinks(categoriesBlog)

  return (
    <ContainerMain
      className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >
      {listBlog.map((category) => {
        return <BlogCategory key={category.path} category={category} />
      })}
    </ContainerMain>
  );
};
