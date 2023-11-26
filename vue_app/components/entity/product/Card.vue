<script setup lang="ts">
import type { Product } from "~/components/entity/product/models/Product";
import AddToCartButton from "~/components/feature/cart/AddToCartButton.vue";

interface IProps {
  product: Product;
}

withDefaults(defineProps<IProps>(), {
  product: null,
});
</script>

<template>
  <UiCardBase>
    <img
      :src="'_nuxt/assets/' + product.image"
      alt="image"
      class="card-image"
    />
    <UiCardText class="product-card-text">
      <template #title>
        {{ product.name }}
      </template>
      <UiCardInfo>
        <div class="ingredients">
          {{ product.description }}
        </div>
      </UiCardInfo>
      <div class="card-buttons">
        <AddToCartButton :product="product" style="margin-right: 30px" />
        <strong class="card-price-bold">{{ product.price }} ₽</strong>
      </div>
    </UiCardText>
  </UiCardBase>
</template>

<style scoped lang="scss">
.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-card-text {
  min-height: 275px;
}

.ingredients {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 21px;
}

.card-buttons {
  display: flex;
  margin-top: 24px;
  flex-grow: 1;
  align-items: flex-end;

  .card-price-bold {
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
