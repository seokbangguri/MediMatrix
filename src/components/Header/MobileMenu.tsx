import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
    const { t } = useTranslation();
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between z-50">
            <nav className='container'>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2 cursor-pointer"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-dark-green"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-dark-green"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-dark-green"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-slate-600 cursor-pointer"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="my-4 uppercase hover:scale-105">
                                <Link
                                    to="/#home"
                                    onClick={(e) => {
                                        setIsNavOpen(false)
                                        if (window.location.pathname === '/') {
                                            e.preventDefault();
                                            window.location.href = '#home';
                                        }
                                    }}
                                    className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green duration-150"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="my-4 uppercase hover:scale-105">
                                <Link
                                    to="/#products"
                                    onClick={(e) => {
                                        setIsNavOpen(false)
                                        if (window.location.pathname === '/') {
                                            e.preventDefault();
                                            window.location.href = '#products';
                                        }
                                    }}
                                    className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green duration-150"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="my-4 uppercase hover:scale-105">
                                <Link
                                    to="/#partners"
                                    onClick={(e) => {
                                        setIsNavOpen(false)
                                        if (window.location.pathname === '/') {
                                            e.preventDefault();
                                            window.location.href = '#partners';
                                        }
                                    }}
                                    className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green duration-150"
                                >
                                    Partners
                                </Link>
                            </li>
                            <li className="my-4 uppercase hover:scale-105">
                                <Link
                                    to="/#contact"
                                    onClick={(e) => {
                                        setIsNavOpen(false)
                                        if (window.location.pathname === '/') {
                                            e.preventDefault();
                                            window.location.href = '#contact';
                                        }
                                    }}
                                    className="text-lg font-semibold text-black tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green duration-150"
                                >
                                    Contact
                                </Link>
                            </li>
                            <div className="flex flex-col items-center gap-8 mt-4">
                                <Link onClick={() => setIsNavOpen(false)} to="/signin" >
                                    <Button appearance="custom" styles="uppercase hover:scale-105 w-[200px] bg-dark-green" >{t('signin')}</Button>
                                </Link>
                                <Link onClick={() => setIsNavOpen(false)} to="/signup">
                                    <Button appearance="custom" styles="uppercase hover:scale-105 w-[200px]" >{t('signup')}</Button>
                                </Link>
                            </div>
                        </ul>

                    </div>
                </section>
            </nav>
            <style>{`.hideMenuNav {
             display: none;
            }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    )
}

export default MobileMenu