<template>
  <section class="result--info--wrap" :class="{ 'text-[#CECECE] dark:text-[#3E3E3E]': isEmpty }">
    <div>{{ info.emoji }}</div>
    <div class="flex flex-col gap-1">
      <h1 class="result--name">{{ info.name }}</h1>
      <span class="result--subname">{{ info.subname }}</span>
    </div>
    <div class="result--info">
      <div></div>
      <div>{{ info.address }}</div>
      <a v-if="resultInfo" :href="info.link" class="underline underline-offset-2">지도보기</a>
    </div>
  </section>
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue'
import type { ResultInfo, CategoryFilter } from '@/types'

const props = defineProps<{ resultInfo: ResultInfo | undefined }>()
const { resultInfo } = toRefs(props)

const EMOJI: Record<CategoryFilter['value'], CategoryFilter['emoji']> = {
  all: '',
  korean: '🍚',
  western: '🍔',
  chinese: '🥢',
  japanese: '🍣',
  snack: '🍢',
  etc: '🍛',
  simple: '🥗',
}

const isEmpty = computed(() => resultInfo.value === undefined)
const info = computed(() => {
  return resultInfo.value
    ? {
        emoji: EMOJI[resultInfo.value.category],
        name: resultInfo.value.name,
        subname: resultInfo.value.subname,
        address: resultInfo.value.address,
        link: resultInfo.value.link,
      }
    : {
        emoji: '🤔',
        name: '골라주세요',
        subname: '',
        address: '',
        link: '',
      }
})
</script>
<style scoped>
.result--info--wrap {
  @apply flex flex-col justify-center gap-6 h-[250px];
}
.result--name {
  @apply text-4xl font-semibold;
}
.result--subname {
  @apply text-lg;
}
.result--info {
  @apply flex flex-col gap-1;
  @apply text-xs;
}
</style>