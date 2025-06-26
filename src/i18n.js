// src/i18n.js
import { createI18n } from 'vue-i18n' //initializes i18n (internationalization system)

const messages = {
  en: {
    welcome: 'Welcome, {name}!',
    language: 'Language',
    about: 'About',
    aboutPage: 'About Page',
    aboutMessage: 'This is the about page.',
    welcomeMessage: 'Welcome to my website! You are currently reading this text in English.',
    returnHome: 'Return Home',
    switchProfile: 'Switch Profile',
    selectProfile: 'Select a Profile',
    enterName: 'Enter your name and choose your language',
    continue: 'Continue',
    count: 'Count',
    increaseCount: 'Increase count',
    resetCount: 'Reset count'
  },
  es: {
    welcome: '¡Bienvenido, {name}!',
    language: 'Idioma',
    about: 'Acerca de',
    aboutPage: 'Acerca de la página',
    aboutMessage: 'Esta es la página acerca de.',
    welcomeMessage: '¡Bienvenido a mi sitio web! Estás leyendo este texto en español.',
    returnHome: 'Volver a Casa',
    switchProfile: 'Cambiar perfil',
    selectProfile: 'Seleccione un Perfil',
    enterName: 'Introduce el nombre',
    continue: 'Continuar',
    count: 'Contar',
    increaseCount:'Aumentar el conteo',
    resetCount: 'Restablecer recuento'
  },
}

const i18n = createI18n({
  legacy: false, // Uses Composition API
  locale: 'en', // english is default language
  fallbackLocale: 'en', //if a translation is missing, English is used
  messages, //holds translation data
})

export default i18n //makes i18n instance available to be used in main.js
