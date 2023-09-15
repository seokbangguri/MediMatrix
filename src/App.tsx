import React from "react";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Heading tag="h1">
          Where teams and <br /> work come together
        </Heading>
      </header>
    </div>
  );
}

export default App;