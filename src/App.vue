<template>
  <div class="min-h-screen bg-white text-black dark:bg-[#0F1117] dark:text-white">
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
