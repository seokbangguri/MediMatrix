import { Footer, Header, Hero, Products, Partners } from "./components";

function App() {
  return (
    <div className="App font-roboto flex flex-col justify-center items-center">
      <Header />
      <main>
        <Products />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
