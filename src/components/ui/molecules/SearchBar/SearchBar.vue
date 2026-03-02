<template>
	<div class="flex items-center gap-2">
		<Input
			type="search"
			:placeholder="placeholder"
			:model-value="modelValue"
			@update:model-value="$emit('update:modelValue', $event)"
		/>
		<Button type="button" variant="primary" @click="$emit('search', modelValue)">
			Search
		</Button>
	</div>
</template>

<script setup>
import Button from '../../atoms/Button/Button.vue';
import Input from '../../atoms/Input/Input.vue';

defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	placeholder: {
		type: String,
		default: 'Search',
	},
});

defineEmits(['update:modelValue', 'search']);
</script>
