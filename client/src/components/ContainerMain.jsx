/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme"
import { useState, useEffect } from "react";

const ContainerMain = ({ children }) => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/img/grunge-wall-texture.jpg";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div className={`${theme.background} px-2 md:px-8 min-h-screen flex justify-center flex-col overflow-auto scroll-smooth bg-fixed bg-contain gap-y-4 bg-repeat container m-auto pb-8`}
      style={bgLoaded ? {
        backgroundImage: "url('/img/grunge-wall-texture.jpg')"
      } : {}}>
      <div className="h-18 md:h-24 "></div>
      {children}
    </div >
  )
}


export default ContainerMain