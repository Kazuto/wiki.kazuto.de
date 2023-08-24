<template>
  <footer
    class="border-t border-secondary-100 text-sm dark:border-secondary-700"
  >
    <vContainer class="flex items-center justify-between">
      <p>
        © {{ new Date().getFullYear() }}
        <a
          class="text-primary"
          href="https://kazuto.de"
          target="_blank"
          >Kazuto</a
        >
      </p>

      <div>
        <a
          href="https://github.com/kazuto/wiki.kazuto.de"
          target="_blank"
          class="transition hover:opacity-75"
        >
          <Icon
            name="mdi:github"
            class="h-6 w-6"
            tooltip="Contribute on GitHub"
          />
        </a>
      </div>
    </vContainer>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
