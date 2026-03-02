<template>
	<header class="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
		<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
			<div class="text-lg font-semibold">{{ brand }}</div>
			<nav class="hidden items-center gap-4 md:flex">
				<a
					v-for="item in items"
					:key="item.label"
					:href="item.href"
					class="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
				>
					{{ item.label }}
				</a>
			</nav>
			<div class="flex items-center gap-2">
				<slot />
			</div>
		</div>
	</header>
</template>

<script setup>
defineProps({
	brand: {
		type: String,
		default: 'Brand',
	},
	items: {
		type: Array,
		default: () => [],
	},
});
</script>
