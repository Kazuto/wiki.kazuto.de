<template>
  <template v-if="isNavItem(item)">
    <h4
      v-if="item.is_dir"
      class="mt-2 flex items-center py-1 text-xs uppercase"
    >
      <Icon
        v-if="item.icon"
        :name="item.icon"
        class="mr-1"
      />
      {{ item.title }}
    </h4>

    <NuxtLink
      v-else
      :to="item._path"
      class="block py-1 pl-2 text-sm text-gray-400 transition-colors hover:text-primary-500 dark:hover:text-primary-200"
    >
      {{ item.title }}
    </NuxtLink>
  </template>

  <template v-else>
    <a
      :href="`#${item.id}`"
      class="block py-1 text-sm text-gray-400 transition-colors hover:text-primary-500 dark:hover:text-primary-200"
    >
      {{ item.text }}
    </a>
  </template>
</template>

<script setup lang="ts">
import { NavItem, TocLink } from '@nuxt/content/dist/runtime/types';

defineProps({
  item: {
    type: Object as PropType<NavItem | TocLink>,
    default: () => {},
  },
});

const isNavItem = (item: NavItem | TocLink): item is NavItem => {
  return Object.keys(item).includes('_path');
};
</script>

<style lang="postcss">
.router-link-active {
  @apply font-medium text-primary-500;
}

.router-link-exact-active {
  @apply font-medium text-primary-400;
}
</style>
