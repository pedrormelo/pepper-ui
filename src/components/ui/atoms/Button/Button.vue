<template>
    <button :class="[
        'inline-flex items-center justify-center font-medium transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        rounded ? 'rounded-full' : 'rounded-lg'
    ]" :disabled="disabled">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    disabled: Boolean,
    rounded: Boolean
});

const variantClasses = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-800 active:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
    outline: 'bg-transparent border border-zinc-300 text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900',
    ghost: 'bg-transparent text-zinc-600 hover:bg-zinc-100 active:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800'
};

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2'
};
</script>