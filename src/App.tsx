import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header } from "./components";

import Beery from "./pages/Beery";
import Home from './pages/Home';

function App() {
  return (
    <div className="App font-roboto flex flex-col justify-center items-center">
      
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={         
                <Home/>
            } />
            <Route path="/beery" element={<Beery />} />
            {/* 기타 경로와 페이지 설정 */}
          </Routes>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App;
