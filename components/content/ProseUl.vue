<template>
  <ul class="mb-4 list-disc pl-4">
    <slot />
  </ul>
</template>

<style lang="postcss">
ul {
  &.contains-task-list {
    @apply pl-0;
  }

  ul {
    @apply !mb-0;
  }
}
</style>
