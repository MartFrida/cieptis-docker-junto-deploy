import ContainerMain from "../components/ContainerMain";
import { InfoSection } from "../components/SectionInfo";
import SectionRegular from "../components/SectionRegular";
import { theme } from "../helpers/theme";
import HeroVideoSection from "../components/HeroVideoSection";
import { useTranslation } from "react-i18next";

export const Nutrition = () => {
  const { t } = useTranslation();
  const heroData = t('nutrition-data:nutrition', { returnObjects: true })
  const contentNutr = t('nutrition-data:offers', { returnObjects: true })
  const sections = Object.keys(contentNutr)

  return (
    <ContainerMain
      className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >
      <section className={`${theme.primary} flex flex-col lg:flex-row rounded-lg gap-4 w-full`}>
        <HeroVideoSection videoHero={heroData.videoSrc} title={heroData.title} description={heroData.description} />
      </section>
      {sections?.map((id, index) => (
        <SectionRegular key={id} id={id} className={index > 4 ? "mt-8" : ""}>
          <InfoSection {...contentNutr[id]} />
        </SectionRegular>
      ))}
    </ContainerMain>
  );
};
