<script setup lang="ts">
import { AppMode, currentAppMode } from '@/states/appMode.js'
</script>

<template>
  <div
    :class="[
      'flex gap-x-1',
      'mb-2 px-20 py-1 md:mt-2',
      'rounded-full',
      'bg-black/10 hover:bg-black/20 active:bg-black/25',
      'dark:bg-white/10 dark:hover:bg-white/20 dark:active:bg-white/25',
      'text-black/60 dark:text-white/60',
      'cursor-default select-none',
    ]"
    @click="currentAppMode = AppMode.search"
  >
    🔎
  </div>
</template>
