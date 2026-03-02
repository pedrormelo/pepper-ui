<template>
	<span :class="[
		'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
		variantClasses[variant]
	]">
		<slot />
	</span>
</template>

<script setup>
defineProps({
	variant: {
		type: String,
		default: 'neutral',
	},
});

const variantClasses = {
	neutral: 'border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100',
	success: 'border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
	warning: 'border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200',
	danger: 'border-rose-300 bg-rose-100 text-rose-800 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-200',
};
</script>
