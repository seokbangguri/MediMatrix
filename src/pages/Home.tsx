import React from "react";
import { Products, Partners, Hero, Contact } from "../components";
const Home = () => {
  return <div className="w-screen lg:max-w-[1445px]">
    <Hero />
    <Products />
    <Partners />
    <Contact />
  </div>;
};

export default Home;
