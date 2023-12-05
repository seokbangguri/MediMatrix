import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import userIcon from '../../assets/user.svg'
import { Link } from 'react-router-dom';


const LANGUAGE_SELECTOR_ID = 'language-selector';
interface SignoutProps {
    handleSignOut: () => void;
    role: String
}
const Account = ({ handleSignOut, role }: SignoutProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const handleWindowClick = (event: any) => {
            const target = event.target.closest('button');
            if (target && target.id === LANGUAGE_SELECTOR_ID) {
                return;
            }
            setIsOpen(false);
        }
        window.addEventListener('click', handleWindowClick)
        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, []);

    return (
        <>
            <div className="flex items-center z-40">
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center gap-5 w-[130px] rounded-xs border border-slate-300 shadow-sm px-4 py-[10px] bg-white text-sm font-medium text-black hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id={LANGUAGE_SELECTOR_ID}
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                        >

                            <img src={userIcon} alt="user" width={20} height={20} />
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    {isOpen && <div
                        className="origin-top-right absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="language-selector"
                    >
                        <div className="w-full flex flex-col gap-2" role="none">
                            <div className="w-full">
                                <h6 className="py-2 px-4 font-semibold text-lg tracking-wider bg-neutral-200 border-b border-slate-400">{'userName'}님</h6>
                                <Link to="/setting" className="py-2 px-4 block text-base tracking-wide hover:bg-neutral-200 cursor-pointer">
                                    {t('mypage')}
                                </Link>
                                {role === 'therapists' ?
                                    <Link to="/results" className="py-2 px-4 block text-base tracking-wide hover:bg-neutral-200 cursor-pointer">{t('patientMan')}</Link> :
                                    <Link to="/admin" className="py-2 px-4 block text-base tracking-wide hover:bg-neutral-200 cursor-pointer">{t('therapistMan')}</Link>
                                }
                                <div className="p-2 px-4 hover:bg-neutral-200 cursor-pointer" onClick={handleSignOut}>{t('logout')}</div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Account;