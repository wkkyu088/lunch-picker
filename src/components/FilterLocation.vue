<template>
	<FilterAccordion title="위치">
		<template #filter>
			<div class="flex flex-col gap-16">
				<div
					class="relative h-220 w-full rounded-md border border-GRAY dark:border-WHITE"
				>
					<button class="my-location">
						<MaterialIcon icon="my_location" :size="18" />
					</button>
				</div>
				<div class="flex flex-col gap-8">
					<div class="relative flex">
						<input v-model="distance" type="range" :min="MIN" :max="MAX" :step="STEP" />
						<div ref="slider" class="slider"></div>
						<div ref="track" class="track"></div>
					</div>
					<div class="flex w-full justify-between">
						<div v-for="i in 5" :key="i" class="text-sm text-GRAY dark:text-WHITE">
							<span>{{ MIN + STEP * (i - 1) }}</span>
						</div>
					</div>
				</div>
			</div>
		</template>
	</FilterAccordion>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import FilterAccordion from '@/components/FilterAccordion.vue'
import MaterialIcon from '@/components/MaterialIcon.vue'

const MIN = 100
const MAX = 500
const STEP = 100

const distance = ref<number>(200)
const slider = ref<HTMLDivElement | null>(null)
const track = ref<HTMLDivElement | null>(null)

const setSliderWidth = (value: number) => {
	if (slider.value && track.value) {
		const percentage = ((value - MIN) / (MAX - MIN)) * 100
		slider.value.style.width = `${percentage}%`
		track.value.style.width = `${100 - percentage}%`
	}
}

watch(distance, (value) => {
	setSliderWidth(value)
})

onMounted(() => {
	setSliderWidth(distance.value)
})
</script>
<style scoped>
.my-location {
	@apply absolute bottom-12 right-12 flex rounded-full p-8;
	@apply bg-GRAY/10 active:bg-GRAY/40 dark:bg-WHITE/10 dark:active:bg-WHITE/40;
	@apply transition-all duration-200;
}
input[type='range'] {
	@apply z-10 w-full appearance-none bg-transparent;
}
input[type='range']::-webkit-slider-thumb {
	@apply size-16 rounded-full;
	@apply bg-PRIMARY;
	@apply border border-WHITE;
	@apply cursor-pointer appearance-none;
}
.slider {
	@apply absolute left-0 top-1/2 h-8 -translate-y-1/2 rounded-full;
	@apply bg-PRIMARY;
}
.track {
	@apply absolute right-0 top-1/2 h-8 -translate-y-1/2 rounded-full;
	@apply bg-LIGHT_GRAY dark:bg-GRAY;
}

@media screen and (min-width: 768px) {
	.my-location {
		@apply hover:bg-GRAY/30 active:bg-GRAY/40 dark:hover:bg-WHITE/30 dark:active:bg-WHITE/40;
	}
}
</style>
