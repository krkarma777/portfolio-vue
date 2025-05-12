// src/components/Navbar.vue
<template>
  <header class="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
    <div class="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="text-lg font-bold text-white">유준.dev</h1>
      <nav class="hidden md:flex gap-6 text-sm text-gray-200">
        <a href="#about" class="hover:text-cyan-400 transition">About</a>
        <a href="#projects" class="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" class="hover:text-cyan-400 transition">Contact</a>
      </nav>
      <button class="md:hidden text-gray-200" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div v-if="isOpen" class="md:hidden px-4 pb-4 flex flex-col gap-2 bg-black/60 text-gray-200">
      <a href="#about" class="hover:text-cyan-400">About</a>
      <a href="#projects" class="hover:text-cyan-400">Projects</a>
      <a href="#contact" class="hover:text-cyan-400">Contact</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
</style>