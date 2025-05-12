// src/components/Hero.vue
<template>
  <section class="min-h-screen flex flex-col justify-center items-start gap-6 py-32 px-4 md:px-8 lg:px-16 animate-fadein">
    <h1 class="text-4xl md:text-6xl font-bold leading-tight">
      안녕하세요, <br class="hidden md:inline" /> 저는 <span class="text-cyan-400">풀스택 개발자 유준</span>입니다.
    </h1>
    <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
      사용자 중심의 UI, 안정적인 백엔드, 자동화된 배포까지.<br class="hidden md:inline" />
      전 과정을 설계하고 구현하는 개발자입니다.
    </p>
    <a
        href="#projects"
        class="inline-block bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium px-6 py-3 rounded-lg shadow transition-all duration-300"
    >
      프로젝트 보러가기
    </a>
  </section>
</template>

<script setup lang="ts">
// 없음
</script>

<style scoped>
@keyframes fadein {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadein {
  animation: fadein 0.8s ease-out both;
}
</style>