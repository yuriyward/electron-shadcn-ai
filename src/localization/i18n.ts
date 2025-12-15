import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        appName: 'fix-grammar',
        titleHomePage: 'Home Page',
        titleSecondPage: 'Second Page',
        documentation: 'Documentation',
        version: 'Version',
        madeBy: 'Made by Yuriy Babyak',
      },
    },
    'pt-BR': {
      translation: {
        appName: 'fix-grammar',
        titleHomePage: 'Página Inicial',
        titleSecondPage: 'Segunda Página',
        documentation: 'Documentação',
        version: 'Versão',
        madeBy: 'Feito por Yuriy Babyak',
      },
    },
  },
});
