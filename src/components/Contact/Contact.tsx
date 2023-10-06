import React from "react";
import { Text, Heading, Button } from "../../components";

function Contact() {
  return (
    <section className="lg:px-10 mt-20 mb-20 flex items-center w-full lg:max-w-[1445px] mx-auto" id="contact">
      <div className="w-full bg-white-blue py-20 rounded-[100px] ">
        <Heading tag="h2">Contact Us</Heading>
        <Text size="m" styles="text-center my-3 max-w-[600px] m-auto text-sm md:text-lg">
          Complete the form below to connect with our team of experts on implementing digital primary care solutions.
        </Text>
        <div className="flex items-center justify-center gap-20 mx-auto mt-14">
          <a href="/">
            <Button apperance="custom" styles="px-16">Get in touch</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
