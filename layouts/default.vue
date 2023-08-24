<template>
  <div class="bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-100">
    <div class="grid min-h-screen lg:grid-cols-[auto_1fr]">
      <vNavigationSidebarMenu />
      <vNavigationSidebarMenuMobile v-if="menuState" />

      <div class="flex flex-col">
        <vLayoutHeader class="px-8 lg:px-16" />

        <main class="flex-grow p-8 lg:px-16 lg:py-12">
          <vContainer>
            <vLayoutArticle v-if="page">
              <slot />
            </vLayoutArticle>

            <slot v-else />
          </vContainer>
        </main>

        <vLayoutFooter class="p-8 lg:px-16" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = ref<string>(useRoute().fullPath);

const { page } = useContent();

const menuState = useMenuState();

watch(
  route,
  () => {
    menuState.value = false;
  },
  { deep: true, immediate: true }
);

watch(menuState, (value) => {
  if (value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<style lang="postcss"></style>
