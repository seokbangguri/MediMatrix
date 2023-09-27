import React, { useState, useEffect } from "react";
import image from "../../assets/medimatrix_logo_black.svg";
import userIcon from '../../assets/user.svg'
import Button from "../Button/Button";


const Header = () => {
  var user = sessionStorage.getItem('name');
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
    window.location.reload();
  }

  return (
    <header className="fixed top-0 z-30 w-screen bg-white mx-auto">
      <div className="lg:max-w-[1445px] flex items-center justify-between py-5  lg:px-10 mx-auto">
        <div className="flex items-center justify-center shrink-0">
          <a href="/">
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
              href="#home"
              className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.
                const targetElement = document.querySelector("#products");
                if (targetElement instanceof HTMLElement) {
                  const targetPosition = targetElement.offsetTop; // 원하는 위치를 조정하세요.
                  window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth", // 부드럽게 스크롤합니다.
                  });
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Products
            </a>
            <a
              href="/"
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              About Us
            </a>
            <a
              href="/"
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Contact
            </a>
          </div>
        </nav>
        {!user ? <div className="flex items-center gap-2">
          <a href="/signin">
            <Button styles="text-lg font-semibold rounded-xs text-black border-transparent inline-block min-w-[130px] py-2 border hover:opacity-75 uppercase" >Sign In</Button>
          </a>
          <a href="/signup">
            <Button apperance="custom" styles="uppercase" >Sign Up</Button>
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
                  <li className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">User</li>
                  <li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer">Setting</li>
                  <li className="p-2 px-4 hover:bg-neutral-200 cursor-pointer border-t border-slate-400" onClick={handleSignOut}>Sign out</li>
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
