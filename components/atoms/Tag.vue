<template>
  <span
    class="inline-block rounded-full border px-2 py-0.5 text-sm font-bold"
    :style="{
      backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.18)`,
      color: lighten(color, 50),
      borderColor: lighten(color, 30, 0.3),
    }"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: string;
  }>(),
  {
    color: '#aaa',
  }
);

const color = computed(() => toRGB(props.color));

function toRGB(hex: string) {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  if (hex.length !== 6) {
    throw new Error('Invalid hex color.');
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return {
    r,
    g,
    b,
  };
}

function lighten(
  rgb: { r: number; g: number; b: number },
  percent: number,
  alpha?: number
) {
  rgb = {
    r: calculateLightness(rgb.r, percent),
    g: calculateLightness(rgb.g, percent),
    b: calculateLightness(rgb.b, percent),
  };

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha ?? 1})`;
}

function calculateLightness(color: number, percent: number) {
  return Math.min(255, Math.floor(color + (255 - color) * (percent / 100)));
}
</script>
