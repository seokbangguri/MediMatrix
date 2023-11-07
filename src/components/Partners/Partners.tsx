import goqimage from "../../assets/GoQba_logo.svg";
import chaimage from "../../assets/CHA_logo.png";
import { Text, Heading } from "../../components";

function Partners() {
  return (
    <section className="lg:px-10 pt-10 pb-16 flex items-center w-full lg:max-w-[1445px] mx-auto relative" id="partners">
      <div className="w-full bg-white-green py-10 md:py-20 rounded-tr-[100px] rounded-bl-[100px] ">
        <Heading tag="h2">Partners</Heading>
        <Text size="m" styles="text-center my-3 max-w-[400px] md:max-w-[600px] m-auto">
          기업 간 파트너십을 맺어 더 나은 서비스를 위해 노력하고 있습니다.
        </Text>
        <div className="flex items-center justify-center gap-5 md:gap-20 mx-auto mt-8 md:mt-12">
          <div>
            <img src={goqimage} alt="goq" className="w-[150px] md:max-w-[250px]" />
          </div>
          <div>
            <img src={chaimage} alt="cha" className="w-[270px] md:max-w-[340px]" />
          </div>
        </div>
      </div>
      <div id="contact" className="absolute inset-x-0 bottom-28"></div>
    </section>
  );
}

export default Partners;
