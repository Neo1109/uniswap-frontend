import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'	
import LanguageDetector from 'i18next-browser-languagedetector'	


 i18next	// translation catalog
  .use(XHR)	const resources = {
  .use(LanguageDetector)	  en: {
  .use(initReactI18next)	    translation: {
  .init({	  "noWallet": "No Ethereum wallet found",
    backend: {	  "wrongNetwork": "You are on the wrong network",
      loadPath: '/locales/{{lng}}.json'	  "switchNetwork": "Please switch to {{ correctNetwork }}",
    },	  "installWeb3MobileBrowser": "Please visit us from a web3-enabled mobile browser such as Trust Wallet or Coinbase Wallet.",
    react: {	  "installMetamask": "Please visit us after installing Metamask on Chrome or Brave.",
      useSuspense: true	  "disconnected": "Disconnected",
    },	  "swap": "Swap",
    fallbackLng: 'en',	  "swapAnyway": "Swap Anyway",
    preload: ['en'],	  "send": "Send",
    keySeparator: false,	  "sendAnyway": "Send Anyway",
    interpolation: { escapeValue: false }	  "pool": "Pool",
  })
