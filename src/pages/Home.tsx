import React from "react";
import blobImage from "../assets/home-blob.svg"
import { Products, Partners, Hero, Contact, Footer } from "../components";
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
    <Contact />
    <div style={{
      backgroundImage: `url(${blobImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "40%",
      width: '100%',
      height: '100%',
      }}
      className="absolute left-[-100px] top-[900px] -z-10"
    ></div>
    <div style={{
      backgroundImage: `url(${blobImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: '700px',
      height: '800px',
      transform: 'rotate(30deg)',
      }}
      className="absolute right-[-300px] top-[1800px] -z-10"
    ></div>
    <div style={{
      backgroundImage: `url(${blobImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: '700px',
      height: '800px',
      }}
      className="absolute right-[-300px] top-[-300px] -z-10"
    ></div>
    <Footer />
  </div>;
};

export default Home;
