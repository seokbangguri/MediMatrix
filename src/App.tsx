import React from "react";
import { Footer, Header } from "./components";
import Heading from "./components/Heading/Heading";

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
    </div>
  );
}

export default App;