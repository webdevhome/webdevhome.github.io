<script setup lang="ts">
import { showBackgroundSetting } from '@/lib/settings/settings.js'
</script>

<template>
  <div
    :class="[
      'fixed inset-0',
      'grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]',
      'overflow-hidden',
      {
        'bg-page-light bg-cover bg-center dark:bg-page-dark': showBackgroundSetting.value.value,
        'bg-white dark:bg-gray-800': !showBackgroundSetting.value.value,
      },
    ]"
  >
    <div class="col-span-2">
      <slot name="header"></slot>
    </div>
    <div class="overflow-auto">
      <slot name="sidebar"></slot>
    </div>
    <div class="overflow-auto" id="app-main-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
