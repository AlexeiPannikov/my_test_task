<script setup lang="ts">
import type { IOrder } from "~/components/entity/cart/CartStore";
import { useCartStore } from "~/components/entity/cart/CartStore";

interface IProps {
  order: IOrder;
}

const props = withDefaults(defineProps<IProps>(), {
  order: null,
});

const cart = useCartStore();

const decrement = () => {
  props.order.count--;
  if (props.order.count === 0) {
    cart.value.orders = cart.value.orders.filter(
      (item) => item.product.id !== props.order.product.id,
    );
  }
};
</script>

<template>
  <div class="food-row">
    <span class="food-name">{{ order?.product.name }}</span>
    <strong class="food-price">{{ order.product.price }} ₽</strong>
    <div class="food-counter">
      <button class="counter-button" @click="decrement">-</button>
      <span class="counter">{{ order.count }}</span>
      <button class="counter-button" @click="order.count++">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.food-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 15px;

  .food-counter {
    display: flex;
    align-items: center;

    .counter-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 39px;
      height: 32px;
      background: #ffffff;
      border: 1px solid #40a9ff;
      box-sizing: border-box;
      border-radius: 2px;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: #40a9ff;

      &:hover {
        background: #40a9ff;
        border: 1px solid #ffffff;
        color: #ffffff;
      }
    }
  }
}
</style>
