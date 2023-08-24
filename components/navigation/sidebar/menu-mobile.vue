<template>
  <nav
    class="fixed inset-0 z-40 w-full border-r border-secondary-100 bg-secondary-50 p-8 text-secondary-600 dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-100 lg:hidden"
  >
    <div class="flex justify-between">
      <vLogo />
      <vNavigationMenuButton />
    </div>
    <div class="mb-4">
      <vSearch />
    </div>
    <vNavigationNodeTree
      :node="navigation"
      :level="1"
    />
  </nav>
</template>

<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';

const { navigation }: { navigation: Ref<Array<NavItem>> } = useContent();

defineEmits(['toggleMenu']);
</script>

<style scoped></style>
