<template>
  <ClientOnly>
    <button
      v-bind="$attrs"
      class="flex h-10 w-10 items-center justify-center rounded text-2xl transition hover:bg-gray-100 dark:hover:bg-gray-800"
      :aria-label="menuState ? 'Close menu' : 'Open menu'"
      @click.prevent="() => (menuState = !menuState)"
    >
      <Icon
        v-if="menuState"
        name="heroicons:x-mark"
      />
      <Icon
        v-else
        name="heroicons:bars-3"
      />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const menuState = useMenuState();
</script>

<style scoped></style>
