<script lang="ts" setup>
import { type ICart, useCartStore } from "~/components/entity/cart/CartStore";

const isOpen = ref(false);
const cart = useCartStore();
let stateCopy: ICart = null;

watch(isOpen, () => {
  if (isOpen.value) {
    stateCopy = JSON.parse(JSON.stringify(cart.value));
  }
});

const total = computed(() =>
  cart.value.orders
    .map((item) => item.product.price * item.count)
    .reduce((accum, currentValue) => accum + currentValue, 0),
);

const onCancel = () => {
  cart.value = stateCopy;
  isOpen.value = false;
};
</script>

<template>
  <UiButtonPrimary id="cart-button" class="button-cart" @click="isOpen = true">
    <template #icon>
      <span class="button-cart-svg"></span>
    </template>
    Корзина
  </UiButtonPrimary>

  <LazyUiModalWindowBase v-model:is-open="isOpen">
    <UiModalWindowTitle>Корзина</UiModalWindowTitle>
    <div class="orders">
      <EntityCartOrder
        v-for="order in cart.orders"
        :key="order.product.id"
        :order="order"
      />
    </div>
    <div class="modal-footer">
      <span class="modal-pricetag">{{ total }} ₽</span>
      <div class="footer-buttons">
        <UiButtonPrimary :disabled="!cart.orders.length">
          Оформить заказ
        </UiButtonPrimary>
        <UiButtonPrimary @click="onCancel">Отмена</UiButtonPrimary>
      </div>
    </div>
  </LazyUiModalWindowBase>
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

.orders {
  margin-top: 45px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .footer-buttons {
    display: flex;
    align-items: center;
    margin: -10px;

    & > * {
      margin: 5px;
    }
  }
}
</style>
