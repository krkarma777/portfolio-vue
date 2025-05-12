<script setup>
import { useTheme } from '@/composables/useTheme'
const { isDark, toggle } = useTheme()
</script>

<template>
  <nav class="flex justify-between items-center px-6 py-4 bg-primary text-white fixed top-0 w-full z-50">
    <div class="font-bold">YuJun</div>
    <div class="flex items-center gap-4">
      <a href="#projects" class="hover:text-accent">Projects</a>
      <a href="#skills" class="hover:text-accent">Skills</a>
      <a href="#contact" class="hover:text-accent">Contact</a>
      <button @click="toggle" class="text-xl">🌓</button>
    </div>
  </nav>
</template>
