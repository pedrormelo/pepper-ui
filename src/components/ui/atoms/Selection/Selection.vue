<template>
    <label class="inline-flex items-center gap-2" :class="props.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'">
        <template v-if="props.variant === 'toggle'">
            <input
                :id="props.id"
                type="checkbox"
                class="peer sr-only"
                :name="props.name"
                :disabled="props.disabled"
                :checked="isChecked"
                @change="onChange"
            />
            <span
                :class="[
                    'relative rounded-full bg-zinc-300 transition-colors duration-200 dark:bg-zinc-700',
                    sizeMap.toggleTrack,
                    isChecked ? 'bg-blue-600 dark:bg-blue-500' : ''
                ]"
            >
                <span
                    :class="[
                        'absolute top-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200',
                        sizeMap.toggleThumb,
                        isChecked ? 'translate-x-5' : 'translate-x-0.5'
                    ]"
                />
            </span>
        </template>

        <input
            v-else
            :id="props.id"
            :type="props.variant"
            :class="[baseInputClass, sizeMap.input]"
            :name="props.name"
            :disabled="props.disabled"
            :checked="isChecked"
            :value="props.value"
            @change="onChange"
        />

        <span v-if="$slots.default || props.label" class="text-sm text-zinc-700 dark:text-zinc-300">
            <slot>{{ props.label }}</slot>
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type SelectionVariant = 'checkbox' | 'radio' | 'toggle';
type SelectionSize = 'sm' | 'md' | 'lg';
type SelectionValue = string | number;
type SelectionModel = boolean | SelectionValue | SelectionValue[];

interface SelectionProps {
    id?: string;
    name?: string;
    modelValue?: SelectionModel;
    value?: SelectionValue;
    variant?: SelectionVariant;
    size?: SelectionSize;
    disabled?: boolean;
    label?: string;
}

const emit = defineEmits<{
    'update:modelValue': [value: SelectionModel];
    change: [value: SelectionModel];
}>();

const props = withDefaults(defineProps<SelectionProps>(), {
    variant: 'checkbox',
    size: 'md',
    disabled: false,
    value: '',
    label: '',
});

const baseInputClass = 'border-zinc-300 text-blue-600 transition focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-blue-400';

const sizeMap = computed(() => {
    if (props.size === 'sm') {
        return {
            input: 'h-3.5 w-3.5',
            toggleTrack: 'h-5 w-9',
            toggleThumb: 'h-4 w-4',
        };
    }

    if (props.size === 'lg') {
        return {
            input: 'h-5 w-5',
            toggleTrack: 'h-7 w-12',
            toggleThumb: 'h-6 w-6',
        };
    }

    return {
        input: 'h-4 w-4',
        toggleTrack: 'h-6 w-11',
        toggleThumb: 'h-5 w-5',
    };
});

const isChecked = computed(() => {
    if (props.variant === 'checkbox' || props.variant === 'toggle') {
        if (Array.isArray(props.modelValue)) {
            return props.modelValue.includes(props.value);
        }

        if (typeof props.modelValue === 'boolean') {
            return props.modelValue;
        }

        return Boolean(props.modelValue);
    }

    return props.modelValue === props.value;
});

const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (props.variant === 'checkbox' || props.variant === 'toggle') {
        if (Array.isArray(props.modelValue)) {
            const next = [...props.modelValue];
            const index = next.findIndex((item) => item === props.value);

            if (target.checked && index === -1) {
                next.push(props.value);
            }

            if (!target.checked && index !== -1) {
                next.splice(index, 1);
            }

            emit('update:modelValue', next);
            emit('change', next);
            return;
        }

        const next = target.checked;
        emit('update:modelValue', next);
        emit('change', next);
        return;
    }

    if (props.variant === 'radio' && target.checked) {
        emit('update:modelValue', props.value);
        emit('change', props.value);
    }
};
</script>