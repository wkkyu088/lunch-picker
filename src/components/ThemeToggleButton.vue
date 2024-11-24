<template>
  <button
    class="theme-toggle-button"
    :class="{ 'bg-PRIMARY_INACTIVE': isDark, 'bg-PRIMARY': !isDark }"
    @click="handleTheme"
  >
    <div
      class="absolute transition-200 size-[22px] bg-WHITE rounded-full"
      :class="{ 'left-[4px]': isDark, 'right-[4px]': !isDark }"
    ></div>
    <MaterialIcon icon="light_mode" :size="18" class="ms-[1px]" />
    <MaterialIcon icon="dark_mode" :size="18" />
  </button>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import MaterialIcon from '@/components/MaterialIcon.vue'

const isDark = ref<Boolean>(false)
const theme = computed(() => (isDark.value ? '다크' : '라이트'))

const handleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const localTheme = localStorage.getItem('theme')
  if (localTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.toggle('dark')
  }
})
</script>
