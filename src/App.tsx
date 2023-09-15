import React from "react";
import { Footer, Header, Text } from "./components";
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
        <Text size="m" styles="max-w-[480px] text-center">
          Complete the form below to connect with our team of experts on
          implementing digital primary care solutions.
        </Text>
      </main>
      <Footer />
      <section>
        <Heading tag="h2">
          Our Products and Services
        </Heading>
        <div className="flex">
          <Card
            source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
            name="Beery VMI"
            explain={["something","something","something","something",]}
          >
              Complete the form below to connect with our team of experts on implementing.
          </Card>
          <Card
            source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
            name="card"
            explain={["explain1 2-1","explain2 2-2","explain3 2-3", "test 2-4"]}
          >
              card test
          </Card>
        </div>
      </section>
    </div>
  );
}

export default App;
