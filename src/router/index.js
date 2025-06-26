// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProfileSetup from '../views/ProfileSetup.vue'
import Welcome from '../views/Welcome.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: ProfileSetup },         // default route
  { path: '/welcome', component: Welcome },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
