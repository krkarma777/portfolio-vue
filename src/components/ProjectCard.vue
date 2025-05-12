<template>
  <div class="bg-[#1e1e1e] p-5 rounded-lg shadow-md hover:scale-105 transition">
    <img :src="image" alt="screenshot" class="rounded mb-3" />
    <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
    <p class="text-gray-400 text-sm mb-2">{{ description }}</p>
    <a :href="url" target="_blank" class="text-accent underline text-sm">GitHub Link</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  url: string
}>()
</script>
