// src/i18n.js
import { createI18n } from 'vue-i18n' //initializes i18n (internationalization system)

const messages = {
  en: {
    welcome: 'Welcome, {name}!',
    language: 'Language',
  },
  es: {
    welcome: '¡Bienvenido, {name}!',
    language: 'Idioma',
  },
}

const i18n = createI18n({
  legacy: false, // Uses Composition API
  locale: 'en', // english is default language
  fallbackLocale: 'en', //if a translation is missing, English is used
  messages, //holds translation data
})

export default i18n //makes i18n instance available to be used in main.js
