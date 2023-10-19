import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components";
import Beery from "./pages/Beery";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import Setting from './pages/Setting';
import Admin from './pages/admin';

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/results" element={<Results />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/admin" element={<Admin />} />
          {/* 기타 경로와 페이지 설정 */}
        </Routes>

      </Router>

    </div>
  );
}

export default App;
