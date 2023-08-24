<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const title = ref('Wiki');

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title.value}` : title.value;
  },
});
</script>
