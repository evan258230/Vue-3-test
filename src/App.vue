<!-- .vue files are designed to use HTML, CSS, and JavaScript in one file -->


<template> <!-- HTML goes here-->
  <select v-model="lang" @change="setLanguage">
    <option value="en">English</option>
    <option value="es">Español</option>
  </select>
  <!-- <h1>{{ $t('welcome', { name: 'Evan' }) }}</h1> <!-- $t() is a vue i18n function that means translate. It'll look up the translation key and return the translated string-->
  <!-- <p>{{ $t('language') }}</p> -->

  <!-- <p>Welcome to the translation page! Select your language with the drop down menu.</p>
  <p>Count: {{ count }}</p>
  <button @click="addNumber">Increase count</button>
  <br>
  <button @click="resetNumber">Reset count</button> -->

  <nav>
    <router-link to="/home">Home</router-link>
    <br>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>

</template>

<script setup> 
// have javascript here if needed

import { ref } from 'vue'

const lang = ref(localStorage.getItem('locale') || 'en')

function setLanguage() {
  localStorage.setItem('locale', lang.value)
  window.location.reload()
}


</script>
