<template>
	<FilterAccordion title="분류">
		<template #filter>
			<div class="filter--wrap">
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
			</div>
		</template>
	</FilterAccordion>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import FilterAccordion from '@/components/FilterAccordion.vue'
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
<style scoped>
.filter--wrap {
	@apply flex flex-wrap justify-center gap-x-8 gap-y-12;
}
.checkbox--label {
	@apply flex size-60 flex-col justify-center gap-4 rounded-md;
	@apply transition-200 cursor-pointer;
}
.checkbox--label-unchecked {
	@apply border border-PRIMARY_INACTIVE dark:border-WHITE;
	@apply font-normal text-PRIMARY_INACTIVE dark:text-WHITE;
}
.checkbox--label-checked {
	@apply bg-PRIMARY/10;
	@apply border border-PRIMARY;
	@apply font-medium text-PRIMARY;
}
</style>
