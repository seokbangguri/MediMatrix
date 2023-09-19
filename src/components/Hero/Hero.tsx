import React from "react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Button/Button";
import "../../../src/index.css";


const Hero = () => {
  return (
    <section className="px-5 lg:px-10 flex flex-col justify-center items-center py-20 h-screen">
      <Heading tag="h1" className="">
        MediMatrix는 AI 기반 알고리즘을 통해 <br/>자동적이고 객관적인 서비스를 제공합니다.
      </Heading>
      <Text size="l" styles="max-w-[450px] text-center mb-16">
        Beery VMI, example, example, example
      </Text>
      <div id="container">
        <div id="chevron"></div>
        <div id="chevron"></div>
        <div id="chevron"></div>
      </div>
      <Button apperance="primary">자세히 알아보기</Button>
    </section>
  );
};

export default Hero;
