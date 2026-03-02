<template>
  <div class="group relative inline-flex">
    <slot />

    <span
      :class="[
        'pointer-events-none absolute z-20 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-zinc-100 dark:text-zinc-900',
        placementClass,
      ]"
      role="tooltip"
    >
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TooltipProps } from './Tooltip.types';

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
});

const placementClass = computed(() => {
  if (props.placement === 'right') {
    return 'left-full top-1/2 ml-2 -translate-y-1/2';
  }

  if (props.placement === 'bottom') {
    return 'left-1/2 top-full mt-2 -translate-x-1/2';
  }

  if (props.placement === 'left') {
    return 'right-full top-1/2 mr-2 -translate-y-1/2';
  }

  return 'bottom-full left-1/2 mb-2 -translate-x-1/2';
});
</script>
