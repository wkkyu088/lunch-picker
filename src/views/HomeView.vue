<template>
	<header class="relative flex items-center justify-between">
		<span class="absolute left-1/2 -translate-x-1/2 text-gray-500">오늘 뭐 먹지</span>
		<Sidebar />
	</header>
	<main class="pannel flex flex-col items-center gap-16 p-24">
		<FilterLocation />
		<div class="h-1 w-full bg-LIGHT_GRAY dark:bg-GRAY"></div>
		<FilterCategory v-model:selectedCategory="selectedCategory" />
	</main>
	<main class="pannel flex flex-col items-center gap-24 p-24">
		<section>
			<div class="flex items-center justify-center gap-4">
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
		<StartButton @click="handleStart" />
	</main>
	<main class="pannel">
		<SelectedResult :resultInfo />
	</main>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import FilterCategory from '@/components/FilterCategory.vue'
import FilterLocation from '@/components/FilterLocation.vue'
import StartButton from '@/components/StartButton.vue'
import SelectedResult from '@/components/SelectedResult.vue'
import MaterialIcon from '@/components/MaterialIcon.vue'
import data from '@/assets/data/data.json'
import type { ResultInfo } from '@/types'

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
	@apply my-16 rounded-md;
	@apply bg-WHITE dark:bg-DARK_GRAY;
	@apply border border-LIGHT_GRAY dark:border dark:border-GRAY;
	@apply shadow-pn;
}
.filtered-data-list {
	@apply mt-16;
	@apply text-sm leading-relaxed text-MIDDLE_GRAY;
}
</style>
