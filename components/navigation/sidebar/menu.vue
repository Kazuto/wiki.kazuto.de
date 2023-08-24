<template>
  <nav
    class="hidden w-80 border-r border-gray-100 p-8 dark:border-gray-800 lg:block"
  >
    <vLogo />
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
</script>

<style scoped></style>
