import { useState, useEffect, } from "react";
import imagetest1 from "../../assets/test1.svg";
import Button from "../Button/Button";
import { verifyToken } from "../../auth/auth";
import { Link } from "react-router-dom";

import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import MobileMenu from "./MobileMenu";
import Account from "./Account";

const Header = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');


  useEffect(() => {
    verifyToken().then(decodedToken => {
      if (decodedToken) {
        setUserName(decodedToken.name);
        setRole(decodedToken.role);
      }
    });

  }, [userName]);

  function handleSignOut() {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <header className="fixed top-0 z-30 w-screen bg-white mx-auto drop-shadow-md">
      <div className="container flex items-center justify-between py-3 px-3 md:px-5 mx-auto">
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
        <nav className="hidden lg:flex items-center ">
          {/* 헤더 home products contack 숨김 */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-9">
            <Link
              to="/#home"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.location.href = '#home';
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Home
            </Link>
            <Link
              to="/#products"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.location.href = '#products';
                }
              }}
              className="text-lg font-semibold text-black tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
            >
              Products
            </Link>
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
          </div>
        </nav>
        <div className="flex items-center gap-5">
          {!userName.length ? <div className="hidden lg:flex items-center gap-2">
            <Link to="/signin">
              <Button styles="text-lg font-semibold rounded-xs text-black border-transparent inline-block min-w-[130px] py-2 border hover:opacity-75 uppercase" >{t('signin')}</Button>
            </Link>
            <Link to="/signup">
              <Button appearance="custom" styles="uppercase" >{t('signup')}</Button>
            </Link>
          </div> :
            <Account handleSignOut={handleSignOut} role={role} />
          }

          <LanguageSwitcher />
          <div className=" z-50">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
