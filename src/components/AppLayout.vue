<script setup lang="ts"></script>

<template>
  <div class="app-layout" :class="{ background: true, 'no-background': false }">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="content" id="app-main-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  @apply fixed inset-0;
  @apply grid grid-cols-[auto,1fr] grid-rows-[auto,1fr];
  @apply overflow-hidden;

  &.background {
    @apply bg-page-light bg-cover bg-center;
    @apply dark:bg-page-dark;
  }

  &.no-background {
    @apply bg-white dark:bg-gray-800;
  }
}

.header {
  @apply col-span-2;
}

.sidebar {
  @apply overflow-auto;
}

.content {
  @apply overflow-auto;
}
</style>
