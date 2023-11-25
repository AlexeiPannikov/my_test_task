<template>
  <UiInputBase
      type="text"
      placeholder="Адрес доставки"
      class="input-address"
  />
</template>

<style scoped lang="scss">
.input-address {
  width: 100%;
  background-image: url("assets/img/icon/home.svg");
  padding-left: 35px;

  @include for-mobile-lg-only {
    margin-top: 15px;
    order: 5;
    flex: 1;
  }
}
</style>