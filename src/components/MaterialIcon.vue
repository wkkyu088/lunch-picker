<template>
  <span
    class="material-symbols-rounded"
    :style="{
      fontSize: `${size ?? 24}px`,
      fontVariationSettings: `'FILL' 1, 'wght' 400`,
    }"
  >
    {{ icon }}
  </span>
</template>
<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{ icon: string; size?: number }>()
const { icon } = toRefs(props)
</script>
