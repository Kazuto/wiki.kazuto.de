<template>
  <blockquote
    class="relative mb-4 rounded border-l-4 border-l-gray-200 bg-gray-100 px-4 py-2 italic dark:border-l-gray-700 dark:bg-gray-800"
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
