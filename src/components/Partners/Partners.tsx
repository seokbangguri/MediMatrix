import goqimage from "../../assets/GoQba_logo.svg";
// import chaimage from "../../assets/CHA_logo.png";
import { Text, Heading } from "../../components";
import { useTranslation } from 'react-i18next';

function Partners() {
  const { t } = useTranslation();

  return (
    <section className="px-5 lg:px-10 pt-10 pb-16 flex items-center w-full container mx-auto relative" id="partners">
      <div className="w-full bg-white-green py-10 md:py-20 rounded-tr-[100px] rounded-bl-[100px] ">
        <Heading tag="h2">{t('partners_heading')}</Heading>
        <Text size="m" styles="text-center mt-5 max-w-[400px] md:max-w-[600px] m-auto">
          {t('partners_text')}
        </Text>
        <div className="flex items-center justify-center flex-wrap gap-5 md:gap-20 mx-auto mt-8 md:mt-12">
          <div>
            <img src={goqimage} alt="goq" className="w-[150px] md:max-w-[250px]" />
          </div>
          <div>
            <img src={goqimage} alt="goq" className="w-[150px] md:max-w-[250px]" />
          </div>
          <div>
            <img src={goqimage} alt="goq" className="w-[150px] md:max-w-[250px]" />
          </div>
          <div>
            <img src={goqimage} alt="goq" className="w-[150px] md:max-w-[250px]" />
          </div>
          {/* <div>
            <img src={chaimage} alt="cha" className="w-[270px] md:max-w-[340px]" />
          </div> */}
        </div>
      </div>
      <div id="contact" className="absolute inset-x-0 bottom-28"></div>
    </section>
  );
}

export default Partners;
