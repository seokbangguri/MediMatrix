import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import KoreaFlag from '../../assets/south-korea-flag-icon.svg';
import BritainFlag from '../../assets/united-kingdom-flag-icon.svg';

interface FlagIconProps {
    countryCode: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({ countryCode = "kr" }) => {
    let flagSrc;
    let altText;

    if (countryCode === 'en') {
        flagSrc = BritainFlag;
        altText = 'Britain Flag';
    } else if (countryCode === 'kr') {
        flagSrc = KoreaFlag;
        altText = 'Korea Flag';
    }

    if (flagSrc) {
        return <img src={flagSrc} alt={altText} className='mr-2 w-[25px] block' />;
    } else {
        // If countryCode is neither 'en' nor 'kr', you may want to handle this case.
        // You can return a default flag or an empty element based on your requirements.
        return <></>;
    }
}

const LANGUAGE_SELECTOR_ID = 'language-selector';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const languages = [{ key: 'en', name: 'English' }, { key: 'kr', name: '한국어' }];
    const selectedLanguage = languages.find(language => language.key === i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(() => {
            setIsOpen(false);
        });
    };

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

    if (!selectedLanguage) {
        return null;
    }

    return (
        <>
            <div className="flex items-center z-40">
                <div className="relative inline-block text-left w-[130px]">
                    <div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center w-full rounded-xs border border-slate-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-black hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id={LANGUAGE_SELECTOR_ID}
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                        >
                            <FlagIcon countryCode={selectedLanguage?.key ? selectedLanguage.key : 'en'} />
                            {selectedLanguage?.name}
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
                        className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="language-selector"
                    >
                        <div className=" flex flex-col gap-2" role="none">
                            {languages.map((language, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => changeLanguage(language.key)}
                                        className={`${selectedLanguage?.key === language.key
                                            ? "bg-slate-200 text-slate-900"
                                            : "text-black"
                                            } px-4 py-2 text-sm text-left items-center inline-flex hover:bg-slate-100`}
                                        role="menuitem"
                                    >
                                        <FlagIcon countryCode={language.key} />
                                        <span className="truncate">{language.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default LanguageSwitcher;