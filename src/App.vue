// src/App.vue
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
    <Navbar />
    <main class="px-4 md:px-8 lg:px-16">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
/* 기본 폰트는 깔끔한 sans-serif */
body {
  font-family: 'Inter', 'Pretendard Variable', sans-serif;
}
</style>