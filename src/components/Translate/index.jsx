import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passa o i18next para o react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our application!",
        },
      },
      jp: {
        translation: {
          welcome: "私たちのアプリケーションへようこそ！",
        },
      },
    },
    lng: "jp", // Define o idioma padrão
    fallbackLng: "en", // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já escapa por padrão
    },
  });

export default i18n;