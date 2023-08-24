import { ref, customRef } from 'vue';

const debounce = (fn: Function, delay = 0, immediate = false) => {
  let timeout: number;

  return (...args: []) => {
    if (immediate && !timeout) fn(...args);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const useDebouncedRef = <T>(
  initialValue: T,
  delay: number,
  immediate = false
) => {
  const state = ref<T>(initialValue);

  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();

      return state.value;
    },
    set: debounce(
      (value: any) => {
        state.value = value;
        trigger();
      },
      delay,
      immediate
    ),
  }));

  return debouncedRef;
};

export default useDebouncedRef;
