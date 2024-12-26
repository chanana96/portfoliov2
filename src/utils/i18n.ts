import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enLocale from "@config/locales/en/translation.json";
import koLocale from "@config/locales/ko/translation.json";

const resources = {
    en: { translation: enLocale },
    ko: { translation: koLocale },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources,
        supportedLngs: ["en", "ko"],
        fallbackLng: "en",
        detection: {
            order: [
                "querystring",
                "navigator",
                "cookie",
                "localStorage",
                "sessionStorage",
                "htmlTag",
            ],
            lookupQuerystring: "lang",
            lookupCookie: "i18next",
            lookupLocalStorage: "i18nextLng",
            lookupSessionStorage: "i18nextLng",
            caches: ["localStorage", "cookie"],
            cookieMinutes: 10080,
        },
    });

export default i18n;
