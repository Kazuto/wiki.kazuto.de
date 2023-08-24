<template>
  <div>
    <button
      class="relative flex w-full items-center rounded border border-gray-200 px-2 py-1 text-left text-sm text-gray-400 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      @click.prevent="openSearch"
    >
      <Icon
        name="heroicons:magnifying-glass"
        class="mr-1"
      />
      Search...
      <div
        class="pointer-events-none absolute right-2 flex cursor-none gap-1 text-xs"
        aria-label="Press CTRL +
        K to open search"
      >
        <span
          class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800 dark:text-gray-200"
          >CTRL</span
        >
        <span
          class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800 dark:text-gray-200"
          >K</span
        >
      </div>
    </button>
    <div
      v-if="isSearchOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-50"
      @click="closeSearch"
    >
      <div
        class="mx-4 mt-56 rounded bg-gray-100 shadow dark:bg-gray-800 md:mx-auto md:w-2/3 lg:w-2/3 xl:w-1/3"
        @click.stop
      >
        <div>
          <input
            ref="input"
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="w-full border-none bg-transparent p-4 placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div
          v-if="searchResult.length > 0"
          class="border-t border-gray-300 p-2 dark:border-gray-700"
        >
          <NuxtLink
            v-for="item in searchResult"
            :key="item.title"
            :to="item.item._path"
            class="block rounded p-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div>
              <h2 class="text-lg font-bold">
                {{ item.item.title }}
              </h2>
              <p class="mb-0 text-sm">{{ item.item.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import Fuse from 'fuse.js';

const content = ref<ParsedContent[]>([]);

const input = ref<HTMLInputElement | null>(null);

const isSearchOpen = ref<Boolean>(false);
const searchQuery = useDebounceRef<String>('', 250);
const searchResult = ref<Fuse.FuseResult<ParsedContent[]>[]>([]);

const options = {
  keys: ['title', 'description'],
};

onMounted(async () => {
  await getContent();

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'k') {
      isSearchOpen.value = !isSearchOpen.value;
    }

    if (e.key === 'Escape') {
      isSearchOpen.value = false;
    }
  });
});

async function getContent() {
  const response = await queryContent('/').find();

  content.value = response.filter((document: any) => !document.is_dir);

  Fuse.createIndex(options.keys, content.value);
}

const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;

  searchQuery.value = '';
};

watch(isSearchOpen, (val) => {
  if (val) {
    input.value?.focus();
  }
});

watch(searchQuery, () => {
  const fuse = new Fuse(content.value, options);

  searchResult.value = fuse.search(searchQuery.value);
});
</script>
