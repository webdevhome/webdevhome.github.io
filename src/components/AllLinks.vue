<script setup lang="ts">
import { groupedLinks } from '../lib/links/links.js'
import LinkGroup from './LinkGroup.vue'
</script>

<template>
  <div
    :class="[
      'grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))]',
      'gap-x-2 gap-y-8 sm:gap-x-4 lg:gap-x-8',
      'p-page',
    ]"
  >
    <LinkGroup v-for="group in groupedLinks.items" :key="group.name" :group="group" />
  </div>
</template>
