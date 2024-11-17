<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import AllLinks from './components/AllLinks.vue'
import AppAction from './components/AppAction.vue'
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import AppSearchButton from './components/AppSearchButton.vue'
import JumpLinks from './components/JumpLinks.vue'
import { AppMode, currentAppMode, isCurrentAppMode } from './states/appMode.js'

function handleScrollTopClick() {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement === null) return

  mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <template #header>
      <AppHeader>
        <template #center>
          <AppSearchButton v-if="isCurrentAppMode(AppMode.default)" />
        </template>

        <template #actions>
          <AppAction
            v-if="isCurrentAppMode(AppMode.default)"
            icon="Top"
            label="Top"
            @action="handleScrollTopClick"
          />

          <AppAction
            v-if="isCurrentAppMode(AppMode.search)"
            icon="left"
            label="Back"
            highlight
            @action="currentAppMode = AppMode.default"
          />

          <AppAction
            v-if="isCurrentAppMode(AppMode.customize)"
            icon="check"
            label="Done"
            highlight
            @action="currentAppMode = AppMode.default"
          />

          Menu
        </template>
      </AppHeader>
    </template>

    <template #sidebar>
      <JumpLinks v-if="isCurrentAppMode(AppMode.default, AppMode.customize)" />
    </template>

    <template #content>
      <AllLinks v-if="isCurrentAppMode(AppMode.default, AppMode.customize)" />
      <AppSearch v-else />
    </template>
  </AppLayout>
</template>

<style scoped></style>
