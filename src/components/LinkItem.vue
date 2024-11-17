<script setup lang="ts">
import { toggleHiddenLink } from '@/lib/links/hiddenLinks.js'
import type { LinkItem, SearchTarget } from '@/lib/links/links.js'
import { showBackgroundSetting, showDescriptionsSetting } from '@/lib/settings/settings.js'
import { getSimpleIconsUrl } from '@/lib/sys/simpleIcons.js'
import { AppMode, currentAppMode, isCurrentAppMode } from '@/states/appMode.js'
import { searchTarget } from '@/states/search.js'
import { computed } from 'vue'
import KbdOutput from './KbdOutput.vue'
import LinkAction from './LinkAction.vue'
import SvgIcon from './SvgIcon.vue'

const props = withDefaults(
  defineProps<{
    link: LinkItem
    searchable?: boolean
    visible?: boolean
    focus?: boolean
  }>(),
  {
    searchable: false,
    visible: true,
    focus: false,
  },
)

const linkTitle = computed((): string => {
  if (props.link.description === undefined) {
    return props.link.title
  }

  return `${props.link.title}: ${props.link.description}`
})

function handleLinkClick(event: MouseEvent) {
  if (!isCurrentAppMode(AppMode.customize)) return

  event.preventDefault()
  toggleHiddenLink(props.link.url)
}

function handleSearchClick(event: MouseEvent) {
  event.stopPropagation()
  event.preventDefault()

  currentAppMode.value = AppMode.search
  searchTarget.value = props.link as SearchTarget
}
</script>

<template>
  <a
    :href="link.url"
    rel="noreferrer"
    :title="linkTitle"
    :class="[
      'grid grid-cols-[auto,1fr,auto] grid-rows-[auto,auto]',
      'items-center gap-x-2',
      'p-1',
      {
        'text-gray-400 hover:text-gray-600': !visible,
        'dark:text-gray-400 dark:hover:text-gray-300': !visible,
        'text-gray-700': visible,
      },
      'hover:bg-black/10 active:bg-black/15',
      'dark:hover:bg-white/10 dark:active:bg-white/15',
      {
        'bg-black/10 dark:bg-white/10': focus,
        'outline outline-1 -outline-offset-1 outline-black/25 dark:outline-white/25': focus,
      },
      'focus:outline focus:outline-2 focus:-outline-offset-1',
      'focus:relative focus:z-10',
      'focus:outline-gray-400',
      'rounded-md',
      {
        'cursor-default': isCurrentAppMode(AppMode.customize),
      },
      'overflow-hidden',
    ]"
    @click="handleLinkClick"
  >
    <div
      :class="[
        'grid items-center justify-center',
        'p-1',
        'bg-white',
        'dark:shadow-none rounded',
        {
          'shadow-sm': showBackgroundSetting.value.value,
        },
      ]"
      :style="{ color: link.color }"
    >
      <SvgIcon :src="getSimpleIconsUrl(link.icon)">
        <template #default>D</template>
        <template #loading>L</template>
      </SvgIcon>
    </div>

    <div
      :class="{
        'text-black dark:text-gray-50': visible,
        'line-through': !visible,
      }"
    >
      {{ link.title }}
    </div>

    <div class="-my-1 -mr-1 flex self-stretch">
      <template v-if="searchable && !isCurrentAppMode(AppMode.customize)">
        <div class="mr-2 self-center" v-if="focus">
          <span class="flex items-center justify-center">
            <KbdOutput>Tab</KbdOutput>
          </span>
        </div>

        <LinkAction class="self-stretch dark:text-gray-50" hasHover @click="handleSearchClick">
          🔎
        </LinkAction>
      </template>

      <LinkAction
        v-if="isCurrentAppMode(AppMode.customize)"
        :class="{
          'text-brand-700 dark:text-brand-300': visible,
        }"
      >
        {{ visible ? '⬜' : '✅' }}
      </LinkAction>
    </div>

    <div
      v-if="showDescriptionsSetting.value.value && link.description !== undefined"
      :class="[
        'col-start-2 pb-1 text-sm',
        {
          'text-gray-500 dark:text-gray-300': visible,
        },
      ]"
    >
      {{ link.description }}
    </div>
  </a>
</template>
