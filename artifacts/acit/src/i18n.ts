import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./locales/fr.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import de from "./locales/de.json";
import zh from "./locales/zh.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import ja from "./locales/ja.json";
import ar from "./locales/ar.json";

const savedLang = typeof localStorage !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    es: { translation: es },
    it: { translation: it },
    de: { translation: de },
    zh: { translation: zh },
    pt: { translation: pt },
    ru: { translation: ru },
    ja: { translation: ja },
    ar: { translation: ar },
  },
  lng: savedLang ?? "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
