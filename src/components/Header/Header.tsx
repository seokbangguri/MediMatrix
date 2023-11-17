import { useState, useEffect } from "react";
import imagetest1 from "../../assets/test1.svg";
import userIcon from '../../assets/user.svg'
import Button from "../Button/Button";
import { verifyToken } from "../../auth/auth";
import { Link } from "react-router-dom";


const Header = () => {
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    verifyToken().then(decodedToken => {
      if (decodedToken) {
        setUserName(decodedToken.name);
        setRole(decodedToken.role);
      }
    });

  }, [userName]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleSignOut() {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <header className="fixed top-0 z-30 w-screen bg-white mx-auto drop-shadow-xl">
      <div className="lg:max-w-[1445px] flex items-center justify-between py-5 px-3 md:px-5 mx-auto">
        <div className="flex items-center justify-center shrink-0">
          <Link to="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.location.href = '#home';
              }
            }}>
            <img
              className="pt-1"
              src={imagetest1}
              width={190}
              height={60}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center ">
          {/* 헤더 home products contack 숨김 */}
          {/* <div className="flex items-center gap-4 md:gap-6 lg:gap-9">
            <a
              href="/#home"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.location.href = '#home';
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Home
            </a>
            <a
              href="/#products"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.location.href = '#products';
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Products
            </a>
            <Link to="/#partners"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.location.href = '#partners';
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Partners
            </Link>
            <a
              href="/#contact"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.location.href = '#contact';
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Contact
            </a>
          </div> */}
        </nav>
        {!userName.length ? <div className="flex items-center gap-2">
          <Link to="/signin">
            <Button styles="text-lg font-semibold rounded-xs text-black border-transparent inline-block min-w-[130px] py-2 border hover:opacity-75 uppercase" >로그인</Button>
          </Link>
          <Link to="/signup">
            <Button appearance="custom" styles="uppercase" >회원가입</Button>
          </Link>
        </div> :
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="px-8 py-2 flex items-center  text-black rounded-md focus:outline-none focus:ring focus:ring-button-green hover:opacity-75"
            >
              <img src={userIcon} alt="user" width={20} height={20} />
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-4 w-40 bg-white drop-shadow-xl rounded-sm  overflow-hidden">
                <ul className="list-inside">
                  <li className="py-2 px-4 font-semibold">{userName}님</li>
                  <a href="/setting"><li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer border-t border-slate-400">마이페이지</li></a>
                  {role === 'therapists' ?
                    <a href="/results"><li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer">환자 관리</li></a> :
                    <a href="/admin"><li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer">치료사 관리</li></a>
                  }
                  <li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer" onClick={handleSignOut}>로그아웃</li>
                </ul>
              </div>
            )}
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
