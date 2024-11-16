<script setup lang="ts">
defineEmits(['action'])

withDefaults(
  defineProps<{
    icon: string
    available?: boolean
    active?: boolean
    highlight?: boolean
    label?: string
  }>(),
  {
    available: true,
    active: false,
    highlight: false,
  },
)
</script>

<template>
  <div
    :class="[
      'flex items-center',
      'p-1.5',
      { 'sm:px-3': label !== undefined },
      'rounded-md select-none',
      {
        'opacity-30': !available,
        'hover:bg-black/10 active:bg-black/15': !active && !highlight && available,
        'bg-brand-500': active && !highlight,
        'hover:bg-brand-600 active:bg-brand-700': active && !highlight && available,
        'bg-brand-500/15': highlight,
        'hover:bg-brand-500/25 active:bg-brand-500/35': highlight && available,
        'dark:hover:bg-white/10 dark:active:bg-white/15': !active && !highlight && available,
        'dark:hover:bg-brand-600 dark:active:bg-brand-700': active && !highlight && available,
        'dark:bg-white/10': highlight,
        'dark:hover:bg-white/20 dark:active:bg-white/30': highlight && available,
        'text-white': active && !highlight,
        'text-gray-800 dark:text-gray-100': !active && !highlight,
        'text-brand-600 dark:text-brand-300': highlight,
      },
    ]"
    tabindex="0"
    @click="
      () => {
        if (!available) return
        $emit('action')
      }
    "
  >
    Icon

    <div
      v-if="label !== undefined"
      :class="['ml-2 text-sm font-semibold', { 'hidden lg:block': !highlight }]"
    >
      {{ label }}
    </div>
  </div>
</template>
