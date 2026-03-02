<template>
	<div
		v-if="open"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		@click.self="$emit('close')"
	>
		<div class="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-semibold">{{ title }}</h3>
				<button
					type="button"
					class="rounded-md p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
					@click="$emit('close')"
				>
					✕
				</button>
			</div>

			<div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	open: Boolean,
	title: {
		type: String,
		default: 'Modal',
	},
});

defineEmits(['close']);
</script>
