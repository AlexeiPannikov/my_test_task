<template>
  <UiButtonPrimary>
    <template #icon>
      <span class="button-auth-svg"></span>
    </template>
    <template #text>
      <span class="button-text">Войти</span>
    </template>
  </UiButtonPrimary>
</template>

<style scoped lang="scss">
.button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #fff;
  display: block;
  -webkit-mask: url("assets/img/icon/user.svg") no-repeat 50% 50%;
  mask: url("assets/img/icon/user.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;

  &:hover .button-auth-svg {
    background-color: #595959;
  }
}
</style>
<script setup lang="ts">
</script>