<script setup lang="ts">
withDefaults(
  defineProps<{
    hasHover?: boolean
  }>(),
  {
    hasHover: false,
  },
)

defineEmits(['click'])
</script>

<template>
  <div
    :class="[
      'grid items-center justify-center',
      'px-2',
      'cursor-default',
      {
        'hover:bg-black/10 active:bg-black/15': hasHover,
        'dark:hover:bg-white/10 dark:active:bg-white/15': hasHover,
      },
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>
