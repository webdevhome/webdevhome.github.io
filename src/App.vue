<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import { themeSetting } from './lib/settings/settings.js'

function setLight() {
  themeSetting.setValue('light')
}

function setDark() {
  themeSetting.setValue('dark')
}

function setAuto() {
  themeSetting.setValue('auto')
}
</script>

<template>
  <AppLayout>
    <template #header>Header</template>
    <template #sidebar>Sidebar</template>
    <template #content>
      <div class="flex gap-x-2">
        <div class="text-white">{{ themeSetting.value }}</div>
        <button class="bg-gray-100 border border-gray-400 px-2 rounded" @click="setLight">light</button>
        <button class="bg-gray-100 border border-gray-400 px-2 rounded" @click="setDark">dark</button>
        <button class="bg-gray-100 border border-gray-400 px-2 rounded" @click="setAuto">auto</button>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped></style>
