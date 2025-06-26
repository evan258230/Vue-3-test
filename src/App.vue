<!-- .vue files are designed to use HTML, CSS, and JavaScript in one file -->


<template> <!-- HTML goes here-->
  <!-- <select v-model="lang" @change="setLanguage">
    <option value="en">English</option>
    <option value="es">Español</option>
  </select> -->
  <nav>
    <!-- <router-link to="/welcome">Welcome</router-link>
    <br /> -->
    <router-link to="/about">{{$t('about')}}</router-link>
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
