<template>
  <label v-for="filter in FILTERS" :key="filter.value">
    <input
      type="checkbox"
      :value="filter.value"
      :checked="isChecked(filter.value)"
      @change="handleFilterChange(filter.value, $event)"
      hidden
    />
    <div
      class="checkbox--label"
      :class="{
        'checkbox--label-checked': isChecked(filter.value),
        'checkbox--label-unchecked': !isChecked(filter.value),
      }"
    >
      <div v-if="filter.emoji">{{ filter.emoji }}</div>
      <div>{{ filter.name }}</div>
    </div>
  </label>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import type { CategoryFilter } from '@/types'

const FILTERS: CategoryFilter[] = [
  { name: '전체', value: 'all', emoji: '' },
  { name: '한식', value: 'korean', emoji: '🍚' },
  { name: '양식', value: 'western', emoji: '🍔' },
  { name: '중식', value: 'chinese', emoji: '🥢' },
  { name: '일식', value: 'japanese', emoji: '🍣' },
  { name: '분식', value: 'snack', emoji: '🍢' },
  { name: '기타', value: 'etc', emoji: '🍛' },
  { name: '간편식', value: 'simple', emoji: '🥗' },
]

const selected = defineModel<string[]>('selectedCategory', {
  default: () => [],
})

const isChecked = (value: string) => {
  return selected.value.includes(value)
}

const handleFilterChange = (value: string, event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked
  let newSelected = [...selected.value]
  if (value === 'all') {
    newSelected = isChecked ? FILTERS.map((filter) => filter.value) : []
  } else {
    newSelected = newSelected.filter((v) => v !== 'all')
    if (isChecked) {
      newSelected.push(value)
      if (newSelected.length === FILTERS.length - 1) {
        newSelected.push('all')
      }
    } else {
      newSelected = newSelected.filter((v) => v !== value)
    }
  }
  selected.value = newSelected
}

onMounted(() => {
  selected.value = [...FILTERS.map((filter) => filter.value)]
})
</script>
