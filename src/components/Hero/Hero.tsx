import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Button/Button";
import "../../../src/index.css";
import heroBg from '../../assets/none.svg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="px-5 flex flex-col justify-center container lg:px-10 mx-auto pt-20 min-h-screen relative">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2">
        <div className="flex flex-col items-center md:items-start w-full">
          <Heading tag="h1" className="mt-[50px] md:mt-[180px] text-center md:text-left">
            AI-Powered Health <br /> Assessment
          </Heading>
          <Text size="m" styles="w-[400px] md:max-w-[470px] mb-10 mt-4">
            {t('welcome')}
          </Text>
          <a href="#products" className="mb-[100px] md:mb-[180px]">
            <Button appearance="primary" styles="flex ites-center justify-center gap-3 hover:gap-10  transition-all duration-200">{t('heroBtn')}
              <span>&rarr;</span>
            </Button>
          </a>
        </div>
        <div className="md:-mr-16 w-full mt-[70px] md:mt-0">
          <img src={heroBg} alt="Hero background" className="w-full" />
        </div>
      </div>
      <div id="products" className="absolute inset-x-0 bottom-24"></div>
    </section>
  );
};

export default Hero;
