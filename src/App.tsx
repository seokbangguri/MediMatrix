import { Footer, Header, Hero } from "./components";

function App() {
  return (
    <div className="App font-roboto flex flex-col justify-center items-center">
      <Header />
      <main className="w-screen lg:max-w-[1445px]">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
