import { Products, Partners, Hero, ContactCTO, Footer } from "../components";
import { firstBlobStyle, secondBlobStyle, thirdBlobStyle } from "../styles/generalStyles";

const Home = () => {

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement instanceof HTMLElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  window.onload = function () {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }

  return <div className="static w-screen">
    <Hero />
    <Products />
    <Partners />
    <ContactCTO />
    <div style={firstBlobStyle}
      className="absolute left-[-100px] top-[900px] -z-10"
    ></div>
    <div style={secondBlobStyle}
      className="absolute right-[-300px] top-[1800px] -z-10"
    ></div>
    <div style={thirdBlobStyle}
      className="absolute right-[-300px] top-[-300px] -z-10"
    ></div>
    <Footer />
  </div>;
};

export default Home;
