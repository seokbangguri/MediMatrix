// i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import krTranslation from './ko.json';

const resources = {
    en: { translation: enTranslation },
    kr: { translation: krTranslation },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'kr', // default language
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
