<!-- src/views/About.vue -->
<template>
  <div>
    <h2> {{ $t('aboutPage') }}</h2>
    <p>{{ $t('aboutMessage') }}</p>
    <button @click="returnWelcome">{{ $t('returnHome') }}</button>
  </div>
</template>


<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function returnWelcome() {
    router.push('/welcome')
}


</script>
