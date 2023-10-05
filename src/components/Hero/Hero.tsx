import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Button/Button";
import "../../../src/index.css";
import heroBg from '../../assets/none.svg';


const Hero = () => {
  return (
    <section id="home" className="px-5 flex flex-col justify-center lg:max-w-[1445px] lg:px-10 mx-auto pt-20 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-col items-start w-full">
          <Heading tag="h1" className="mt-[180px] text-left">
            AI-Powered Health Assessment
          </Heading>
          <Text size="m" styles="max-w-[440px] mb-10 mt-4">
            MediMatrix는 AI 기반 알고리즘을 통해 자동적이고 객관적인 서비스를 제공합니다.
          </Text>
          <a href="#products" className="mb-[180px]"><Button apperance="primary">자세히 알아보기 <span className="ml-2">&rarr;</span></Button></a>
        </div>
        <div className="-mr-16 w-full"><img src={heroBg} alt="" className="w-full" /></div>
      </div>
      <div id="products"></div>
    </section>
  );
};

export default Hero;
