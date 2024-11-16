<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<template>
  <div
    :class="[
      'grid items-center',
      'grid-cols-[1fr,auto] grid-rows-[auto,auto]',
      'md:grid-cols-[1fr,auto,1fr] md:grid-rows-1',
      'bg-black/5 dark:bg-white/5',
      'px-page',
    ]"
  >
    <div class="flex items-center gap-x-2">
      AppAction
      <AppLogo />
    </div>

    <div
      :class="[
        'col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1',
        'flex items-center gap-x-1 justify-self-center',
      ]"
    >
      <slot name="center"></slot>
    </div>

    <div class="flex gap-x-1 place-self-end py-2">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
