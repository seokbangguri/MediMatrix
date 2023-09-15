import React from "react";
import { Footer, Header, Text } from "./components";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Heading tag="h1">
          Where teams and <br /> work come together
        </Heading>
        <Heading tag="h2">
          h2 Where teams and <br /> work come together
        </Heading>
        <Heading tag="h3">
          H3 Where teams and <br /> work come together
        </Heading>
        <Text size="m" styles="max-w-[480px] text-center">
          Complete the form below to connect with our team of experts on
          implementing digital primary care solutions.
        </Text>
      </main>
      <Footer />
    </div>
  );
}

export default App;
