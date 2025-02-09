<template>
  <button @click="handleSidebar">
    <MaterialIcon icon="menu" class="text-MIDDLE_GRAY dark:text-LIGHT_GRAY" />
  </button>
  <Transition name="fade">
    <div v-if="isSidebarOpen" class="background" @click="handleSidebar"></div>
  </Transition>
  <main class="sidebar--wrap" :class="{ 'w-0': !isSidebarOpen, 'w-[220px]': isSidebarOpen, }">
    <div class="sidebar--inner">
      <div class="sidebar-header">
        <MaterialIcon icon="fork_spoon" :size="18" class="text-PRIMARY" />
        <span class="text-gray-500">오늘 뭐 먹지</span>
      </div>
      <button 
        class="sidebar-button--common text-WHITE"
        :class="{
          'bg-PRIMARY hover:bg-PRIMARY/80 active:bg-PRIMARY/80': !isDark, 
          'bg-PRIMARY_INACTIVE/60 hover:bg-PRIMARY_INACTIVE/80 active:bg-PRIMARY_INACTIVE/80': isDark
        }" 
        @click="handleTheme"
      >
        <MaterialIcon :icon="themeIcon" :size="18" />테마 변경: {{ theme }}
      </button>
      <button class="sidebar-button--common sidebar-button--theme">
        <MaterialIcon icon="news" :size="18" />릴리즈 노트
      </button>
      <button class="sidebar-button--common sidebar-button--theme">
        <MaterialIcon icon="mail" :size="18" />의견 보내기
      </button>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import MaterialIcon from '@/components/MaterialIcon.vue'

const isSidebarOpen = ref<boolean>(false)
const isDark = ref<boolean>(false)

const themeIcon = computed<string>(() => (isDark.value ? 'dark_mode' : 'light_mode'))
const theme = computed<string>(() => (isDark.value ? '다크' : '라이트'))

const handleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

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
<style scoped>
.sidebar--wrap {
  @apply fixed top-0 left-0 h-[100vh] z-10 overflow-hidden;
  @apply transition-all duration-300;
}
.sidebar--inner {
  @apply flex w-[220px] h-full flex-col gap-4 p-4;
  @apply bg-WHITE dark:bg-BLACK; 
  @apply border-r border-LIGHT_GRAY dark:border-r dark:border-GRAY; 
  @apply transition-colors duration-200;
}
.sidebar-header {
  @apply flex justify-start items-center gap-2 pt-4 pb-6;
}
.sidebar-button--common {
  @apply flex justify-start items-center gap-2 px-3 py-4 rounded-md;
  @apply transition-colors duration-200;
  @apply border border-LIGHT_GRAY dark:border dark:border-GRAY;
}
.sidebar-button--theme {
  @apply bg-LIGHT_GRAY/50 hover:bg-LIGHT_GRAY active:bg-LIGHT_GRAY dark:bg-GRAY/50 dark:hover:bg-GRAY dark:active:bg-GRAY;
  @apply text-BLACK dark:text-WHITE;
}
.background {
  @apply fixed top-0 left-0 w-full h-full z-10;
  @apply bg-BLACK/40 backdrop-blur-sm;
}
</style>