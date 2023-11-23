import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components";
import Beery from "./pages/Beery";
import Sperm from "./pages/Sperm";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import Setting from './pages/Setting';
import Admin from './pages/Admin';
import ResultsSperm from './pages/ResultsSperm';
import PageNotFound from './pages/PageNotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App font-roboto flex flex-col justify-center items-center select-none">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/beery" element={<Beery />} />
          <Route path="/sperm" element={<Sperm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resultsSperm" element={<ResultsSperm />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
          {/* 기타 경로와 페이지 설정 */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
