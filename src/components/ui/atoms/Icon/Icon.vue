<template>
    <span class="material-symbols-outlined shrink-0"
        :style="{ fontSize: `${size}px`, width: `${size}px`, height: `${size}px` }">
        <slot />
    </span>
</template>

<script setup>
defineProps({
    size: { type: [String, Number], default: 24 } // 16, 20, 24, 32, 40
});
</script>