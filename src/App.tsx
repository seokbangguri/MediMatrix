import { Footer, Header, Products, Partners } from "./components";

function App() {
  return (
    <div className="App font-roboto">
      <Header />
      <main>
        <Products/>
        <Partners/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
