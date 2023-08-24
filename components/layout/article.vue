<template>
  <div class="lg:flex lg:gap-8">
    <article class="flex-grow">
      <span
        v-if="dirName"
        class="mb-2 block font-bold capitalize text-primary"
      >
        {{ dirName }}
      </span>

      <h1 class="mb-4 text-5xl font-medium">
        {{ page.title }}
      </h1>

      <vNavigationContentMenu
        v-if="page"
        class="my-8 block xl:hidden"
      />

      <slot />

      <div class="items-between flex pt-8">
        <NuxtLink
          v-if="prev"
          class="text-gray-500 transition hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          :to="prev._path"
        >
          &larr; {{ prev.title }}
        </NuxtLink>
        <span class="grow"></span>
        <NuxtLink
          v-if="next"
          class="text-gray-500 transition hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          :to="next._path"
        >
          {{ next.title }} &rarr;
        </NuxtLink>
      </div>
    </article>

    <vNavigationContentMenu
      v-if="page"
      class="sticky top-16 z-10 hidden xl:block"
    />
  </div>
</template>

<script setup lang="ts">
const { prev, next, page } = useContent();

const dirName = computed((): string | null => {
  if (!page.value._dir) {
    return null;
  }

  return page.value._dir.split('-').join(' ');
});
</script>

<style lang="postcss"></style>
