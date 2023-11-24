
<template>
<UiButtonBase class="button-primary">
  <template #icon>
    <slot name="icon" />
  </template>
  <template #text>
    <slot name="text" />
  </template>
</UiButtonBase>
</template>

<style scoped lang="scss">
.button-primary {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;

  &:hover {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    color: #595959;
  }
}
</style>
<script setup lang="ts">
</script>