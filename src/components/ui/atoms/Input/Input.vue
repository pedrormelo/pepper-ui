<template>
    <div class="w-full" :class="props.grow ? 'flex-1' : ''">
        <label
            v-if="props.label"
            class="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            :class="props.labelClass"
        >
            {{ props.label }}
            <span v-if="props.required" class="ml-1 text-rose-500">*</span>
        </label>

        <div class="relative w-full">
            <div v-if="props.type === 'search'" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
                <BaseIcon size="20">search</BaseIcon>
            </div>

            <textarea
                v-if="props.textarea"
                :value="props.modelValue"
                :rows="props.rows"
                :placeholder="props.placeholder"
                :disabled="props.disabled"
                :readonly="props.readonly"
                :required="props.required"
                :class="containerClass"
                @input="onInput"
            />

            <input
                v-else
                :type="htmlType"
                :placeholder="props.placeholder"
                :value="props.modelValue"
                :disabled="props.disabled"
                :readonly="props.readonly"
                :required="props.required"
                :inputmode="props.type === 'currency' ? 'decimal' : undefined"
                :class="containerClass"
                @input="onInput"
            />

            <button
                v-if="props.removable && props.modelValue"
                type="button"
                class="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                @click="clearValue"
            >
                <BaseIcon size="18">close</BaseIcon>
            </button>
        </div>

        <p
            v-if="props.errorMessage || props.helperText"
            class="mt-1.5 text-xs"
            :class="[props.errorMessage ? 'text-rose-500' : 'text-zinc-500 dark:text-zinc-400', props.helperTextClass]"
        >
            {{ props.errorMessage || props.helperText }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseIcon from '../Icon/Icon.vue';
import type InputProps from './Input.types';

const props = withDefaults(defineProps<InputProps>(), {
    modelValue: '',
    label: '',
    placeholder: '',
    type: 'text',
    size: 'md',
    variant: 'default',
    disabled: false,
    readonly: false,
    required: false,
    textarea: false,
    removable: false,
    errorMessage: '',
    helperText: '',
    labelClass: '',
    helperTextClass: '',
    rows: 3,
    inputMask: '',
    options: () => [],
    grow: false,
});

const emit = defineEmits<{
    'update:modelValue': [value: string | number];
}>();

const htmlType = computed(() => (props.type === 'currency' ? 'text' : props.type));

const sizeClass = computed(() => {
    if (props.size === 'xs') return 'px-2 py-1 text-xs';
    if (props.size === 'sm') return 'px-2.5 py-1.5 text-sm';
    if (props.size === 'lg') return 'px-4 py-3 text-base';
    return 'px-3 py-2 text-sm';
});

const variantClass = computed(() => {
    if (props.variant === 'bordered') {
        return 'bg-white dark:bg-zinc-900 border-2';
    }

    if (props.variant === 'ghost') {
        return 'bg-zinc-50 border-transparent dark:bg-zinc-900/60';
    }

    return 'bg-white dark:bg-zinc-900 border';
});

const colorClass = computed(() => {
    if (props.errorMessage || props.color === 'error') return 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20';
    if (props.color === 'secondary') return 'border-violet-400 focus:border-violet-500 focus:ring-violet-500/20';
    if (props.color === 'accent') return 'border-fuchsia-400 focus:border-fuchsia-500 focus:ring-fuchsia-500/20';
    if (props.color === 'info') return 'border-sky-400 focus:border-sky-500 focus:ring-sky-500/20';
    if (props.color === 'success') return 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20';
    if (props.color === 'warning') return 'border-amber-400 focus:border-amber-500 focus:ring-amber-500/20';
    return 'border-zinc-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-700';
});

const containerClass = computed(() => [
    'w-full rounded-lg text-zinc-900 placeholder:text-zinc-400 transition-colors duration-200',
    'focus:outline-none focus:ring-2 dark:text-zinc-100 dark:placeholder:text-zinc-500',
    sizeClass.value,
    variantClass.value,
    colorClass.value,
    props.type === 'search' ? 'pl-10' : '',
]);

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    emit('update:modelValue', target.value);
};

const clearValue = () => {
    emit('update:modelValue', '');
};
</script>