<template>
  <section id="projects" class="py-24 border-t border-white/10">
    <h2 class="text-3xl font-semibold mb-10">📖 Repositories Overview</h2>
    <div class="space-y-12">
      <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-xl transition"
      >
        <h3 class="text-xl font-semibold text-white mb-2">
          <a :href="project.link" target="_blank" class="text-cyan-400 hover:underline">
            {{ project.title }}
          </a>
        </h3>
        <p class="text-gray-300 text-sm mb-4">{{ project.description }}</p>
        <img
            v-if="project.image"
            :src="project.image"
            alt="project screenshot"
            class="rounded-lg max-w-full border border-white/10"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Javelin WAS',
    link: 'https://github.com/krkarma777/Javelin',
    description:
        '경량 고성능 Java Virtual Threads 기반 WAS. Tomcat 대체용으로 최적화.',
    image:
        'https://github.com/user-attachments/assets/201d8b32-0353-43f6-b71c-dabbc552e690',
  },
  {
    title: 'String Difference Finder',
    link: 'https://github.com/krkarma777/string-difference-finder',
    description:
        '문자열 차이 시각화 도구. 병렬처리 기반 LCS 알고리즘 적용.',
    image:
        'https://github.com/krkarma777/krkarma777/assets/149022496/03a42a88-0d6a-4566-b702-1665c326e94e',
  },
  {
    title: 'CleanAirTracker',
    link: 'https://github.com/krkarma777/CleanAirTracker',
    description:
        'Svelte + TypeScript + PostgreSQL 기반 실시간 공기질 모니터링 서비스.',
    image:
        'https://github.com/krkarma777/krkarma777/assets/149022496/5a8d32bb-7fc6-4660-854c-ee5f8ac27aa6',
  },
  {
    title: 'GitHubUnfollowerTracker',
    link: 'https://github.com/krkarma777/GitHubUnfollowerTracker',
    description:
        'Kotlin + Spring Boot 기반 GitHub 언팔로우 추적기. API 기반 리스트 비교 제공.',
    image:
        'https://github.com/krkarma777/krkarma777/assets/149022496/4a883dd6-224f-44ac-bb7e-85694f41df63',
  },
]
</script>

<style scoped>
</style>
