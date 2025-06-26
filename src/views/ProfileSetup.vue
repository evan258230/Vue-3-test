<template>
    <h1> {{$t('enterName')}}</h1>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <select v-model="language">
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
    <button :disabled="!name" @click="createProfile">{{$t('continue')}}</button>
    <br>
    <h2>{{ $t('selectProfile') }}</h2>
    <select v-model="selectedName">
      <option disabled value="">-- Choose a profile --</option>
      <option v-for="profile in profiles" :key="profile.name" :value="profile.name">
        {{ profile.name }}
      </option>
    </select>
    <button @click="switchProfile">{{$t('switchProfile')}}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const language = ref('en')
const router = useRouter()

const profiles = ref(JSON.parse(localStorage.getItem('profiles') || '[]'))
const selectedName = ref('')

function createProfile() {
  const profiles = JSON.parse(localStorage.getItem('profiles') || '[]')
  const newProfile = { name: name.value, language: language.value }
  profiles.push(newProfile)
  localStorage.setItem('profiles', JSON.stringify(profiles))
  localStorage.setItem('currentProfile', JSON.stringify(newProfile))
  router.push('/welcome')
}
function switchProfile() {
  const profile = profiles.value.find(p => p.name === selectedName.value)
  if (profile) {
    localStorage.setItem('currentProfile', JSON.stringify(profile))
    localStorage.setItem('locale', profile.language)
    // window.location.reload() 
    router.push('/welcome')
}
}
</script>
