<template>
  <UiButtonPrimary class="button-out">
    <template #icon>
      <span class="button-out-svg"></span>
    </template>
    <template #text>
      <span class="button-text">Выйти</span>
    </template>
  </UiButtonPrimary>
</template>

<style scoped lang="scss">
.button-out {
  margin: 0 5px;

  .button-out-svg {
    width: 24px;
    height: 24px;
    display: block;
    background-color: #fff;
    -webkit-mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }

  &:hover .button-out-svg {
    background-color: #595959;
  }
}

@include for-mobile-only {
  .button-out-svg {
    width: 24px;
    height: 24px;
    display: block;
    background-color: #fff;
    -webkit-mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }
}
</style>
<script setup lang="ts">


</script>