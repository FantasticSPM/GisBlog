<script setup>
import { NConfigProvider } from 'naive-ui'
const theme = window.themeOverrides
</script>

<template>
  <NConfigProvider :theme-overrides="theme">
    <RouterView />
  </NConfigProvider>
</template>

<style scoped>
</style>
