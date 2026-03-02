<template>
	<select
		:value="modelValue"
		@change="$emit('update:modelValue', $event.target.value)"
		class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
	>
		<option v-if="placeholder" disabled value="">{{ placeholder }}</option>
		<option
			v-for="option in normalizedOptions"
			:key="option.value"
			:value="option.value"
		>
			{{ option.label }}
		</option>
	</select>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: '',
	},
	options: {
		type: Array,
		default: () => [],
	},
	placeholder: {
		type: String,
		default: 'Select an option',
	},
});

defineEmits(['update:modelValue']);

const normalizedOptions = computed(() => {
	return props.options.map((option) => {
		if (typeof option === 'string' || typeof option === 'number') {
			return { label: String(option), value: String(option) };
		}

		return {
			label: option.label,
			value: option.value,
		};
	});
});
</script>
