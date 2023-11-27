<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  debounce: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

let timerId: NodeJS.Timeout | null = null;

const onInput = (e: Event) => {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    emit("update:modelValue", e.target?.value);
  }, props.debounce);
};

onUnmounted(() => {
  if (timerId) {
    clearTimeout(timerId);
  }
});
</script>

<template>
  <input :value="modelValue" class="input" @input="onInput" />
</template>

<style scoped>
.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 8px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}
</style>
