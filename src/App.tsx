import React from "react";
import { Footer, Header } from "./components";
import Heading from "./components/Heading/Heading";
import Card from "./components/Card/Card"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Heading tag="h1">
          Where teams and <br /> work come together
        </Heading>
      </main>
      <Footer />
      <Card
        source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
        name="card"
        explain={["explain1 1-1","explain2 1-2","explain3 1-3", "test 1-4"]}
      >
          card test
      </Card>
      <Card
        source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
        name="card"
        explain={["explain1 2-1","explain2 2-2","explain3 2-3", "test 2-4"]}
      >
          card test
      </Card>
    </div>
  );
}

export default App;