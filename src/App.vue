<template>
  <div class="min-h-screen w-full bg-[#0F1117] text-white font-sans bg-red-500">
    <div class="max-w-screen-xl w-full mx-auto px-6 md:px-12">
      <header class="w-full px-6 py-4 flex justify-between items-center border-b border-white/10">
        <h1 class="text-2xl font-bold">YuJun Oh</h1>
        <nav class="space-x-4 text-sm">
          <a href="#about" class="hover:text-cyan-400 transition">About</a>
          <a href="#tech" class="hover:text-cyan-400 transition">Tech</a>
          <a href="#projects" class="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" class="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer class="text-center text-sm py-6 border-t border-white/10 text-white/40">
        &copy; 2025 YuJun Oh. All rights reserved.
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
body {
  @apply bg-[#0F1117];
}
</style>