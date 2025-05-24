import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Получаем текущий путь

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу в начало при изменении пути
  }, [pathname]);

  return null; // Этот компонент не рендерит ничего
};

export default ScrollToTop;
