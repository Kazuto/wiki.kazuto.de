<template>
  <li><slot /></li>
</template>

<style lang="postcss">
li:has(input[type='checkbox']) {
  @apply flex items-center gap-2;
}
</style>
