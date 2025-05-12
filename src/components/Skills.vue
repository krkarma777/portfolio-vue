<template>
  <section id="skills" class="py-10 text-center" data-aos="fade-up" data-aos-delay="200">
    <h2 class="text-2xl font-bold mb-4 text-white">💻 Skills & Technologies</h2>
    <div class="flex flex-wrap justify-center gap-2">
      <img
          v-for="(badge, i) in skillBadges"
          :key="i"
          :src="badge"
          alt="skill"
          class="h-6"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const skillBadges = [
  'https://img.shields.io/badge/Java-F89820?style=flat-square&logo=java&logoColor=white',
  'https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white',
  'https://img.shields.io/badge/Kotlin-0095D5?style=flat-square&logo=kotlin&logoColor=white',
  'https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white',
  'https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue-dot-js&logoColor=white',
  'https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white',
  'https://img.shields.io/badge/AmazonAWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white',
]
</script>
