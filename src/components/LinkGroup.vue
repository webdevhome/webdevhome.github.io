<script setup lang="ts">
import { isHiddenLinkUrl } from '@/lib/links/hiddenLinks.js'
import type { LinkGroup } from '@/lib/links/links.js'
import { showBackgroundSetting } from '@/lib/settings/settings.js'
import { AppMode, isCurrentAppMode } from '@/states/appMode.js'
import { kebabCase } from 'es-toolkit'
import { computed, ref } from 'vue'
import LinkGroupButton from './LinkGroupButton.vue'
import LinkItem from './LinkItem.vue'

const props = defineProps<{ group: LinkGroup }>()

const showHiddenLinks = ref(false)

const hiddenLinks = computed(() => {
  return props.group.items.filter((item) => isHiddenLinkUrl(item.url))
})

const allGroupLinksAreHidden = computed(() => {
  return hiddenLinks.value.length === props.group.items.length
})

const showHiddenLinksButtonLabel = computed(() => {
  const showOrHide = showHiddenLinks.value ? 'Hide' : 'Show'
  const linkPluralized = hiddenLinks.value.length === 1 ? 'link' : 'links'
  return `${showOrHide} ${hiddenLinks.value.length} hidden ${linkPluralized}`
})
</script>

<template>
  <div :id="kebabCase(group.name)" class="scroll-mt-4">
    <div class="mb-2 flex gap-x-1">
      <div
        :class="[
          'flex-auto',
          'px-4 py-2',
          `bg-${group.color ?? 'gray'}-100 dark:bg-${group.color ?? 'gray'}-600`,
          'text-center font-semibold uppercase tracking-wider leading-tight',
          `text-${group.color ?? 'gray'}-800 dark:text-${group.color ?? 'gray'}-50`,
          'rounded-md',
          {
            [`outline outline-1 -outline-offset-1 outline-${group.color}-300 dark:outline-none`]:
              showBackgroundSetting.value.value,
          },
        ]"
      >
        {{ group.name }}
      </div>

      <div
        v-if="isCurrentAppMode(AppMode.customize)"
        :class="[
          'grid items-center justify-center',
          'px-2',
          'hover:bg-gray-200 active:bg-gray-300',
          'dark:hover:bg-gray-600 dark:active:bg-gray-500',
          {
            'text-brand-700 dark:text-brand-300': !allGroupLinksAreHidden,
            'text-gray-400 hover:text-gray-500 active:text-gray-600': allGroupLinksAreHidden,
            'dark:text-gray-400 dark:hover:text-gray-300': allGroupLinksAreHidden,
          },
          'rounded',
        ]"
        @click="handleToggleGroupClick"
      >
        <span v-if="allGroupLinksAreHidden">[_]</span>
        <span v-else>[X]</span>
      </div>
    </div>

    <template v-if="isCurrentAppMode(AppMode.default) && hiddenLinks.length > 0">
      <LinkGroupButton @click="showHiddenLinks = !showHiddenLinks">
        {{ showHiddenLinksButtonLabel }}
      </LinkGroupButton>

      <div v-if="showHiddenLinks">
        <LinkItem
          v-for="link in hiddenLinks"
          :key="link.url"
          :link="link"
          :searchable="link.searchUrl !== undefined"
        />
      </div>
    </template>
  </div>
</template>
