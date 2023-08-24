<template>
  <ClientOnly>
    <button
      v-bind="$attrs"
      :aria-label="`Switch to ${getNextTheme()} mode`"
      class="rounded p-1 px-3 text-lg text-gray-500 dark:text-gray-300"
      @click="setTheme(colorMode.preference)"
    >
      <Icon :name="icon" />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types';
const colorMode = useColorMode();

const icon = ref('heroicons:ellipsis-horizontal');

onMounted(() => {
  setIcon(colorMode.preference);
});

const themeOrder = ['system', 'light', 'dark'];

const getNextTheme = (): string => {
  return (
    themeOrder[themeOrder.indexOf(colorMode.preference) + 1] ?? themeOrder[0]
  );
};

const setTheme = () => {
  colorMode.preference = getNextTheme();
};

function setIcon(theme: ColorModeInstance['preference']) {
  switch (theme) {
    case 'system':
      icon.value = 'heroicons-outline:computer-desktop';
      break;
    case 'light':
      icon.value = 'heroicons-outline:sun';
      break;
    case 'dark':
      icon.value = 'heroicons-outline:moon';
      break;
  }
}

watch(colorMode, (value: ColorModeInstance) => {
  setIcon(value.preference);
});
</script>

<style scoped></style>
