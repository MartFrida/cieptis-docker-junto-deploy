/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown';
import { theme } from "../../helpers/theme"
import rehypeRaw from 'rehype-raw'  // Добавляем rehype-raw для рендеринга HTML
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import SectionRegular from '../SectionRegular';
import ContainerMain from '../ContainerMain';

const Article = () => {
  const { category, id } = useParams();
  const ns = `blog/${category}`;
  const { t, i18n } = useTranslation(ns);
  const navigate = useNavigate();

  useEffect(() => {
    i18n.loadNamespaces(ns); // загружаем нужный JSON
  }, [ns, i18n]);

  const articles = t("articles", { returnObjects: true });
  const article = articles[id];

  // Если статья не найдена (вернётся строка, а не объект)
  if (typeof article !== "object" || !article) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">{t("erroNnoEncontrado", { ns: 'blog/common' })}</h2>
        <p className="mt-4 text-gray-500">{t("errorVerifica", { ns: 'blog/common' })}</p>
      </div>
    );
  }

  // Получаем список ключей и индекс текущей статьи
  const keys = Object.keys(articles);
  const currentIndex = keys.indexOf(id);
  const hasNext = currentIndex >= 0 && currentIndex < keys.length - 1;
  const nextId = hasNext ? keys[currentIndex + 1] : null;

  const goToNextArticle = () => {
    if (nextId) {
      navigate(`/blog/${category}/${nextId}`);
    }
  };

  // Функция для вставки изображения в контент
  const renderImage = (content) => {
    // Используем регулярное выражение для поиска маркера #image: и замены его на тег <img>
    const imageRegex = /#image:\s*(https?:\/\/[^\s]+)\s*"([^"]+)"/g;

    // Заменяем маркер на тег <img> с соответствующим URL
    return content.replace(imageRegex, (match, url, altText) => {
      return `<img src="${url}" alt="${altText}" class="inline-block max-w-xs float-left mr-4 my-2 rounded-lg"/>`;
    });
  };

  // Подготовка контента для рендеринга
  const transformedContent = renderImage(article.content);

  return (
    <ContainerMain className={`${theme.background} p-8`}>
      <SectionRegular key={category.label} id={category.path}>
        <div className={`${theme.text} relative text-xl flex flex-col gap-2`}>
          <h2 className="text-4xl p-4 rounded-lg">
            {article.title}
          </h2>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}  // Подключаем rehypeRaw для рендеринга HTML
            components={{
              p: ({ ...props }) => <p className="prose" {...props} />,
            }}
          >
            {transformedContent}
          </ReactMarkdown>
          {hasNext && (
            <div className="mt-10 flex justify-end">
              <button
                onClick={goToNextArticle}
                className={`${theme.buttonmy} px-4 py-2 rounded`}>
                {t('nextBtn', { ns: 'blog/common' })} →
              </button>
            </div>
          )}
        </div>
      </SectionRegular>
    </ContainerMain >
  );
};

export default Article;
