import React from "react";
import { Products, Partners, Hero, Contact } from "../components";
import blobImage from "../assets/home-blob.svg"

const Home = () => {

  return <div className="static w-screen lg:max-w-[1445px]">
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
  </div>;
};

export default Home;
