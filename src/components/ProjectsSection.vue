<template>
  <section
      id="projects"
      class="py-24 px-6 md:px-20 lg:px-32 bg-[#0F1117] border-t border-white/10"
  >
    <h2 class="text-3xl font-semibold mb-12 text-white">🚀 Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
          v-for="project in projects"
          :key="project.title"
          class="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md hover:shadow-xl transition"
      >
        <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
        <div
            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4"
        >
          <h3 class="text-lg font-semibold text-white mb-1">{{ project.title }}</h3>
          <p class="text-sm text-white/70 mb-2">{{ project.description }}</p>
          <a
              :href="project.link"
              target="_blank"
              class="text-cyan-400 text-sm underline hover:text-cyan-300"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Javelin WAS',
    link: 'https://github.com/krkarma777/Javelin',
    description: '경량 고성능 Virtual Thread 기반 WAS',
    image: 'https://github.com/user-attachments/assets/201d8b32-0353-43f6-b71c-dabbc552e690',
  },
  {
    title: 'String Difference Finder',
    link: 'https://github.com/krkarma777/string-difference-finder',
    description: '문자열 차이 시각화 도구',
    image: 'https://github.com/krkarma777/krkarma777/assets/149022496/03a42a88-0d6a-4566-b702-1665c326e94e',
  },
  {
    title: 'Project Leaf',
    link: 'https://github.com/krkarma777/Leaf',
    description: '협업 도구 통합 웹앱',
    image: 'https://github.com/krkarma777/krkarma777/assets/149022496/c2fbe473-5b18-48f8-98d4-c9ddf15f10a3',
  },
  {
    title: 'CleanAirTracker',
    link: 'https://github.com/krkarma777/CleanAirTracker',
    description: '실시간 공기질 모니터링 서비스',
    image: 'https://github.com/krkarma777/krkarma777/assets/149022496/5a8d32bb-7fc6-4660-854c-ee5f8ac27aa6',
  },
  {
    title: 'GitHubUnfollowerTracker',
    link: 'https://github.com/krkarma777/GitHubUnfollowerTracker',
    description: 'GitHub 언팔 실시간 추적기',
    image: 'https://github.com/krkarma777/krkarma777/assets/149022496/4a883dd6-224f-44ac-bb7e-85694f41df63',
  },
]
</script>

<style scoped></style>
