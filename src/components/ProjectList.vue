<template>
  <section class="py-16 max-w-5xl mx-auto px-4" id="projects">
    <h2 class="text-3xl font-bold text-white mb-8">📖 Repositories Overview</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          v-bind="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Javelin WAS',
    description: 'A lightweight high-performance Java web server using Virtual Threads.',
    image: 'https://github.com/user-attachments/assets/201d8b32-0353-43f6-b71c-dabbc552e690',
    url: 'https://github.com/krkarma777/Javelin',
  },
  {
    title: 'String Difference Finder',
    description: 'A parallel-optimized string diff viewer using LCS.',
    image: 'https://github.com/krkarma777/krkarma777/assets/149022496/03a42a88-0d6a-4566-b702-1665c326e94e',
    url: 'https://github.com/krkarma777/string-difference-finder',
  },
  // ... 계속 추가 가능
]
</script>
