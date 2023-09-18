import React from "react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="mt-[140px] px-5 lg:px-10 flex flex-col justify-center items-center py-10">
      <Heading tag="h1" className="">
        Where teams and work <br /> come together
      </Heading>
      <Text size="l" styles="max-w-[450px] text-center mb-16">
        Bring everyone's work into one place: tasks, docs, whteboard, chats,
        goals, and more.
      </Text>
      <Button apperance="primary">Get Started. It's FREE</Button>
    </section>
  );
};

export default Hero;
