import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header, Products, Partners, Hero, Contact } from "./components";

import Beery from "./pages/Beery";

function App() {
  return (
    <div className="App font-roboto flex flex-col justify-center items-center">
      <Header />
        <Router>
          <Routes>
            <Route path="/" element={
              <main className="w-screen lg:max-w-[1445px]">
                <Hero />
                <Products />
                <Partners />
                <Contact />
              </main>
            } />
            <Route path="/Beery" element={<Beery />} />
            {/* 기타 경로와 페이지 설정 */}
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
