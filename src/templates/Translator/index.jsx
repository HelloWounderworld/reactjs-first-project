import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './../..//components/Translate/index.jsx'; // Importa a configuração

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('jp')}>Japanese</button>
    </div>
  );
}

export default App;