localStorage.removeItem('profiles')
localStorage.removeItem('currentProfile')
import { createApp } from 'vue' //imports function createApp from Vue 3 library, which initializes the application
import App from './App.vue' //everything is rendered inside App.vue
import i18n from './i18n' //this configuration lets you translate messages, have a default language, have a fallback language
import router from './router'

const savedLocale = localStorage.getItem('locale') || 'en' //checks if the user previously had a selected language and stores it in localStorage. If nothing was saved, fallback is English
i18n.global.locale.value = savedLocale //sets language of i18n system before app starts and applies the saved language from localStorage

createApp(App).use(i18n).use(router).mount('#app') //creates vue app using App.vue
//.use(i18n) puts the i18n plugin into the Vue app
//mount('#app) tells Vue to render the app into the div block with id="app" inside index.html
