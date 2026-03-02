<template>
	<aside class="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
		<h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{{ title }}</h2>
		<ul class="space-y-1">
			<li v-for="item in items" :key="item.key">
				<button
					type="button"
					class="w-full rounded-lg px-3 py-2 text-left text-sm transition"
					:class="activeKey === item.key
						? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
						: 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'"
					@click="$emit('update:activeKey', item.key)"
				>
					{{ item.label }}
				</button>
			</li>
		</ul>
	</aside>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Menu',
	},
	activeKey: {
		type: String,
		default: '',
	},
	items: {
		type: Array,
		default: () => [],
	},
});

defineEmits(['update:activeKey']);
</script>
