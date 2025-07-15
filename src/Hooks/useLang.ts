import { useState } from "react";
import { translations } from "../Locales/lang";
import type { Language } from "../Locales/lang";


export const useLang = () => {
  const [language, setLanguage] = useState<Language>('en'); // default: English

  const t = translations[language]; // текущий перевод

  const switchLang = (lang: Language) => setLanguage(lang);

  return { t, language, switchLang };
};
