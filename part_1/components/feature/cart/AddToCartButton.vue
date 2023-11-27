<script setup lang="ts">
import { useCartStore } from "~/components/entity/cart/CartStore";
import type { Product } from "~/components/entity/product/models/Product";

interface IProps {
  product: Product;
}

const props = withDefaults(defineProps<IProps>(), {
  product: null,
});

const cart = useCartStore();

const addToCart = () => {
  if (!props.product) return;
  const foundOrder = cart.value.orders.find(
    (item) => props.product.id === item.product.id,
  );
  if (foundOrder) {
    foundOrder.count += 1;
    return;
  }
  cart.value.orders.push({ product: props.product, count: 1 });
};
</script>

<template>
  <UiButtonPrimary @click="addToCart"> В корзину </UiButtonPrimary>
</template>

<style scoped lang="scss"></style>
