<template>
	<div class="inline-flex rounded-lg border border-zinc-300 bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-900">
		<button
			v-for="item in items"
			:key="item.value"
			class="rounded-md px-3 py-1.5 text-sm font-medium transition"
			:class="[
				modelValue === item.value
					? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100'
					: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
			]"
			type="button"
			@click="$emit('update:modelValue', item.value)"
		>
			{{ item.label }}
		</button>
	</div>
</template>

<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	items: {
		type: Array,
		default: () => [],
	},
});

defineEmits(['update:modelValue']);
</script>
