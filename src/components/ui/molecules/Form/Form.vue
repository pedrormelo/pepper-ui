<template>
	<form
		class="space-y-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
		@submit.prevent="$emit('submit')"
	>
		<slot />
	</form>
</template>

<script setup>
defineEmits(['submit']);
</script>
