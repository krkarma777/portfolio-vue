<template>
  <section class="py-10 text-center" data-aos="fade-up" data-aos-delay="200">
    <h2 class="text-2xl font-bold mb-6 text-white">🛠 Tools</h2>
    <div class="flex flex-wrap justify-center gap-2">
      <img
          v-for="(badge, i) in toolBadges"
          :key="i"
          :src="badge"
          alt="tool badge"
          class="h-6"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const toolBadges = [
  'https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white',
  'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white',
  'https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white',
  'https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white',
  'https://img.shields.io/badge/Discord-7289DA?style=flat-square&logo=discord&logoColor=white',
  'https://img.shields.io/badge/Asana-273347?style=flat-square&logo=asana&logoColor=white',
  'https://img.shields.io/badge/IntelliJIDEA-000000?style=flat-square&logo=intellij-idea&logoColor=white',
  'https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white',
  'https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white',
  'https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black',
]
</script>
