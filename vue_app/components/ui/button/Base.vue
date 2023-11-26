<template>
  <button class="button" :class="{ disabled: disabled }">
    <span class="button-icon">
      <slot name="icon" />
    </span>
    <span class="button-text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background: #1890ff;
    border: 1px solid #1890ff;
    color: #fff;
  }
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.7;
}

@include for-mobile-only {
  .button-text {
    display: none;
  }
  .button-icon {
    margin: 0;
  }
  .button {
    min-height: 40px;
    padding: 5px 12px;
  }
}
</style>
