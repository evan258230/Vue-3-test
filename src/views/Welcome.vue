<template>
  <div>
    <h1>{{ $t('welcome', { name: currentProfile.name }) }}</h1>
    <p>{{ $t('welcomeMessage') }}</p>
    <br>
    <p>{{ $t('count') }}: {{ count }}</p>
  <button @click="addNumber">{{ $t('increaseCount') }}</button>
  <br>
  <button @click="resetNumber">{{ $t('resetCount') }}</button>
  <br>
    <button @click="goToProfileSetup"> {{ $t('switchProfile') }}</button>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locale } = useI18n()

const currentProfile = ref(JSON.parse(localStorage.getItem('currentProfile') || '{}'))

// Set the current locale based on profile
watchEffect(() => {
  if (currentProfile.value.language) {
    locale.value = currentProfile.value.language
  }
})

function goToProfileSetup() {
  router.push('/')
}
const count = ref(0) //using ref will cause this to automatiaclly update on the page

function addNumber() {
  count.value++
  saveCountToProfile()
}
function resetNumber() {
  count.value = 0
  saveCountToProfile()
}
function loadCountFromProfile() {
  const profile = JSON.parse(localStorage.getItem('currentProfile'))
  count.value = profile?.count || 0
}

function saveCountToProfile() {
  const profile = JSON.parse(localStorage.getItem('currentProfile'))
  if (profile) {
    profile.count = count.value
    localStorage.setItem('currentProfile', JSON.stringify(profile))

    // Also update it in the profiles list
    const profiles = JSON.parse(localStorage.getItem('profiles') || '[]')
    const index = profiles.findIndex(p => p.name === profile.name)
    if (index !== -1) {
      profiles[index].count = count.value
      localStorage.setItem('profiles', JSON.stringify(profiles))
    }
  }
}
onMounted(() => {
  loadCountFromProfile()
})
</script>
