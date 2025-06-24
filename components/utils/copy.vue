<template>

  <div
    class="group inline gap-2 hover:cursor-pointer"
    @click="copy(value)"
  >
     <slot />
    <div
      v-if="copied"
      class="absolute left-1/2 top-8 translate-x-[-50%] rounded-md border border-secondary-200 bg-secondary-50 px-4 py-2 text-secondary-600 dark:border-secondary-600 dark:bg-secondary-700 dark:text-secondary-100"
    >
       Copied
    </div>

  </div>

</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const { copy, copied } = useClipboard();

defineProps<{ value: string }>();
</script>

