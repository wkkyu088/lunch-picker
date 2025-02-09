<template>
  <header class="relative flex justify-between items-center">
    <span class="text-gray-500 absolute left-1/2 -translate-x-1/2">오늘 뭐 먹지</span>
    <Sidebar />
  </header>
  <section class="flex flex-col gap-8 px-6 py-8 items-center pannel">
    <div class="w-full">
      <div class="filter-accordion">
        <span>필터: 분류</span>
        <button @click="isCategoryShow = !isCategoryShow">
          <MaterialIcon v-if="isCategoryShow" icon="keyboard_arrow_up" />
          <MaterialIcon v-else icon="keyboard_arrow_down" />
        </button>
      </div>
      <section v-show="isCategoryShow" class="filter--wrap">
        <CategoryFilter v-model:selectedCategory="selectedCategory" />
      </section>
      <section class="mt-8">
        <div class="flex justify-center items-center gap-1">
          총 <u>{{ filteredData.length }}개</u> 중
          <button @click="isDataShow = !isDataShow" class="flex items-center">
            <MaterialIcon v-if="isDataShow" icon="arrow_drop_up" :size="18" />
            <MaterialIcon v-else icon="arrow_drop_down" :size="18" />
          </button>
        </div>
        <div v-show="isDataShow && filteredData.length" class="filtered-data-list">
          {{ filteredData.map((item) => item.name).join(' | ') }}
        </div>
      </section>
    </div>
    <StartButton @click="handleStart" />
  </section>
  <main class="pannel">
    <SelectedResult :resultInfo />
  </main>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import StartButton from '@/components/StartButton.vue'
import SelectedResult from '@/components/SelectedResult.vue'
import MaterialIcon from '@/components/MaterialIcon.vue'
import data from '@/assets/data/data.json'
import type { ResultInfo } from '@/types'

const isCategoryShow = ref<boolean>(true)
const isDataShow = ref<boolean>(false)
const selectedCategory = ref<string[]>([])
const resultInfo = ref<ResultInfo | undefined>(undefined)

const filteredData = computed(() => {
  return data.filter((item) => selectedCategory.value.includes(item.category as string))
})

const handleStart = async () => {
  const TIMEOUT = [50, 50, 50, 50, 200, 1000]
  for (let i = 0; i < TIMEOUT.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * filteredData.value.length)
    resultInfo.value = filteredData.value[randomIndex] as ResultInfo

    await new Promise((resolve) => setTimeout(resolve, TIMEOUT[i]))
  }
}
</script>
<style scoped>
.pannel {
  @apply rounded-md my-4;
  @apply bg-WHITE dark:bg-DARK_GRAY;
  @apply border border-LIGHT_GRAY dark:border dark:border-GRAY;
  @apply shadow-pn;
}
.filter-accordion {
  @apply flex justify-between items-center pb-4 px-2;
  @apply text-MIDDLE_GRAY dark:text-LIGHT_GRAY;
}
.filter--wrap {
  @apply flex flex-wrap justify-center gap-x-2 gap-y-3;
}
.filtered-data-list {
  @apply mt-4;
  @apply text-smleading-relaxed text-MIDDLE_GRAY;
}
</style>