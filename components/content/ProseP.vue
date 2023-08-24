<template>
  <p class="mb-4 leading-6"><slot /></p>
</template>

<style lang="postcss">
p:has(+ p) {
  @apply !mb-2;
}
</style>
