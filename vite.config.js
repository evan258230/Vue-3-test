// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' //imports official Vue plug in for Vite.
//this basically tells Vite how to handle .vue files and without this, Vite wouldn't know how to process .vue files

export default defineConfig({
  plugins: [vue()],
})


//configuration file for Vite (the development and build tool)
