<template>
  <footer class="text-center text-gray-500 py-6 border-t border-gray-700 text-sm">
    © {{ year }} YuJun Oh. All rights reserved.
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
