import goqimage from "../../assets/GoQba_logo.svg";
import chaimage from "../../assets/CHA_logo.png";
import { Text, Heading } from "../../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Partners() {
  return (
    <section className="lg:px-10 pt-10 pb-16 flex items-center w-full lg:max-w-[1445px] mx-auto relative" id="partners">
      <div className="w-full bg-white-green py-20 rounded-tr-[100px] rounded-bl-[100px] ">
        <Heading tag="h2">Partners</Heading>
        <Text size="m" styles="text-center my-3 max-w-[600px] m-auto">
          기업 간 파트너십을 맺어 더 나은 서비스를 위해 노력하고 있습니다.
        </Text>
        <div className="flex items-center justify-center gap-20 mx-auto mt-20">
          <Carousel
            autoPlay={true}
            // interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            ariaLabel="Partners"
            centerMode={true}
            showStatus={false}
            transitionTime={1000}
          // centerSlidePercentage={70}
          >
            <div>
              <img src={goqimage} alt="goq" className="max-w-[250px]" />
            </div>
            <div>
              <img src={chaimage} alt="cha" className="max-w-[340px]" />
            </div>
          </Carousel>
        </div>
      </div>
      <div id="contact" className="absolute inset-x-0 bottom-28"></div>
    </section>
  );
}

export default Partners;
