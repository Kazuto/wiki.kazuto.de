<template>
  <ol class="mb-4 list-decimal pl-4">
    <slot />
  </ol>
</template>

<style lang="postcss">
ol {
  ol {
    @apply !mb-0;
  }
}
</style>
