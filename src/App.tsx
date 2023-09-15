import React from "react";
import { Button, Footer, Header, Text } from "./components";
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
        <Text size="l" styles="max-w-[480px] text-center">
          Complete the form below to connect with our team of experts on
          implementing digital primary care solutions.
        </Text>
      </main>
      <Footer />
      <Button apperance="primary">Get Started. It's FREE</Button>
      <Button apperance="ghost">Get Started. It's FREE</Button>
      <Button apperance="custom">Sign Up</Button>
      <Card
        source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
        name="card"
        explain={["explain1 1-1", "explain2 1-2", "explain3 1-3", "test 1-4"]}
      >
        card test
      </Card>
      <Card
        source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
        name="card"
        explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
      >
        card test
      </Card>
    </div>
  );
}

export default App;
