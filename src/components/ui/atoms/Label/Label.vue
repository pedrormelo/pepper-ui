<template>
	<label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
		<span><slot /></span>
		<span v-if="required" class="ml-1 text-rose-500">*</span>
	</label>
</template>

<script setup>
defineProps({
	required: Boolean,
});
</script>
