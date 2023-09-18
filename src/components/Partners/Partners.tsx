import React from "react";
import goqimage from "../../assets/GoQba_logo.svg";
import chaimage from "../../assets/CHA_logo.png";
import { Text, Heading } from "../../components";

function Partners() {
  return (
    <section className=" lg:px-10 pt-10 pb-16 flex items-center w-full">
      <div className="w-full bg-white-green py-20 rounded-[100px] ">
        <Heading tag="h2">Our Partners</Heading>
        <Text size="m" styles="text-center my-3 max-w-[600px] m-auto">
          Biggest companies in Korea trust us and you can trust us as well.
          Biggest companies in Korea trust us.
        </Text>
        <div className="flex items-center justify-center gap-20 mx-auto mt-20">
          <img src={goqimage} alt="goq" className="max-w-[250px]" />
          <img src={chaimage} alt="cha" className="max-w-[340px]" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
