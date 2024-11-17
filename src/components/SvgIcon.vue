<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{ src?: string }>()

const data = ref<string | null>(null)
const error = ref(false)

watchEffect(async () => {
  if (props.src === undefined) return

  try {
    const response = await fetch(props.src)
    const svgString = await response.text()
    data.value = svgString
    error.value = false
  } catch {
    data.value = null
    error.value = true
  }
})
</script>

<template>
  <div v-if="data !== null" v-html="data" class="w-[20px] h-[20px]"></div>
  <slot v-else-if="error || src === undefined"></slot>
  <slot v-else name="loading"></slot>
</template>
