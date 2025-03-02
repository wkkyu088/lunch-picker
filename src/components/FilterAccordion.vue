<template>
	<div class="filter-accordion">
		<div class="filter-accordion--title">
			<span>{{ title }}</span>
			<button @click="isShow = !isShow">
				<MaterialIcon v-if="isShow" icon="keyboard_arrow_up" />
				<MaterialIcon v-else icon="keyboard_arrow_down" />
			</button>
		</div>
		<section v-show="isShow">
			<slot name="filter"></slot>
		</section>
	</div>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue'
import MaterialIcon from '@/components/MaterialIcon.vue'

const props = defineProps<{ title: string }>()
const { title } = toRefs(props)

const isShow = ref<boolean>(true)
</script>
<style scoped>
.filter-accordion {
	@apply flex w-full flex-col gap-16;
}
.filter-accordion--title {
	@apply flex items-center justify-between;
	@apply text-MIDDLE_GRAY dark:text-LIGHT_GRAY;
}
</style>
