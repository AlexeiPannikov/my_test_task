
<template>
  <UiButtonPrimary class="button-cart" id="cart-button">
    <template #icon>
      <span class="button-cart-svg"></span>
    </template>
    <template #text>
      <span class="button-text">Корзина</span>
    </template>
  </UiButtonPrimary>
</template>

<style scoped lang="scss">
.button-cart {
  margin: 0 5px;

  &:hover {
    background-color: #fff;

    .button-cart-svg {
      background-color: #595959;
    }
  }

  .button-cart-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    display: block;
    -webkit-mask: url("assets/img/icon/shopping-cart.svg") no-repeat 50% 50%;
    mask: url("assets/img/icon/shopping-cart.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
  }
}
</style>