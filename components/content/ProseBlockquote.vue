<template>
  <blockquote
    class="relative mb-4 rounded border-l-4 border-l-secondary-200 bg-secondary-100 px-4 py-2 italic dark:border-l-secondary-700 dark:bg-secondary-800"
  >
    <slot />
  </blockquote>
</template>

<style lang="postcss">
blockquote {
  > p {
    @apply !mb-0;
  }
}
</style>
