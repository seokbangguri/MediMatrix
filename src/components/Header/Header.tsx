import React, { useState, useEffect } from "react";
import image from "../../assets/medimatrix_logo_black.svg";
import userIcon from '../../assets/user.svg'
import Button from "../Button/Button";


const Header = () => {
  var user = sessionStorage.getItem('name');
  var role = sessionStorage.getItem('role');
  useEffect(() => {

  }, [user]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleSignOut() {
    // 세션 스토리지에서 데이터 삭제
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('role');
    window.location.href = "/";
  }

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement instanceof HTMLElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 z-30 w-screen bg-white mx-auto drop-shadow-xl">
      <div className="lg:max-w-[1445px] flex items-center justify-between py-5 px-5 md:px-10 mx-auto">
        <div className="flex items-center justify-center shrink-0">
          <a href="/"
              onClick={(e) => {
                if (window.location.pathname == '/') {
                  e.preventDefault();
                  scrollToSection("#home");
                }
              }}>
            <img
              className="pt-1"
              src={image}
              width={190}
              height={60}
              alt="logo"
            />
          </a>
        </div>
        <nav className="flex items-center ">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-9">
            <a
              href="/"
              onClick={(e) => {
                if (window.location.pathname == '/') {
                  e.preventDefault();
                  scrollToSection("#home");
                }
                }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Home
            </a>
            <a
              href="/"
              onClick={(e) => {
                if (window.location.pathname == '/') {
                  e.preventDefault();
                  scrollToSection("#products");
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Products
            </a>
            <a
              href="/"
              onClick={(e) => {
                if (window.location.pathname == '/') {
                  e.preventDefault();
                  scrollToSection("#partners");
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Partners
            </a>
            <a
              href="/"
              onClick={(e) => {
                if (window.location.pathname == '/') {
                  e.preventDefault();
                  scrollToSection("#contact");
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Contact
            </a>
          </div>
        </nav>
        {!user ? <div className="flex items-center gap-2">
          <a href="/signin">
            <Button styles="text-lg font-semibold rounded-xs text-black border-transparent inline-block min-w-[130px] py-2 border hover:opacity-75 uppercase" >로그인</Button>
          </a>
          <a href="/signup">
            <Button apperance="custom" styles="uppercase" >회원가입</Button>
          </a>
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
                  <li className="py-2 px-4 font-semibold">{user}님</li>
                  <a href="/setting"><li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer border-t border-slate-400">마이페이지</li></a>
                  {role == 'therapists' ? 
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
