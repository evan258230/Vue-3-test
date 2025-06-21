<template> <!-- HTML goes here-->
  <h1>{{ $t('welcome', { name: 'Evan' }) }}</h1> <!-- $t() is a vue i18n function that means translate. It'll look up the translation key and return the translated string-->
  <p>{{ $t('language') }}</p>

  <p>Welcome to the translation page! Select your language with the drop down menu.</p>
  <p>Count: {{ count }}</p>
  <button @click="addNumber">Increase count</button>
  <br>
  <button @click="resetNumber">Reset count</button>
</template>

<script setup> 
// have javascript here if needed

import { ref } from 'vue'
const count = ref(0) //using ref will cause this to automatiaclly update on the page

function addNumber() {
  count.value++
}
function resetNumber() {
  count.value = 0
}
</script>