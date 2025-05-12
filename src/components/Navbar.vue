<template>
  <nav class="bg-primary text-white p-4 flex justify-between items-center">
    <router-link to="/" class="text-xl font-bold">MyPortfolio</router-link>
    <ul class="flex gap-4 text-sm">
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>
