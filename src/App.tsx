import React from "react";
import { Button, Footer, Header, Text, Products, Partners } from "./components";
import Heading from "./components/Heading/Heading";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App font-roboto">
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
        <Products/>
        <Partners/>
      </main>
      <Footer />
      <Button apperance="primary">Get Started. It's FREE</Button>
      <Button apperance="ghost">Get Started. It's FREE</Button>
      <Button apperance="custom">Sign Up</Button>
    </div>
  );
}

export default App;
