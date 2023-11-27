<script setup lang="ts">
import type { Product } from "~/components/entity/product/models/Product";

interface IProps {
  list: Product[];
  loading: boolean;
  error: Error | null;
}

withDefaults(defineProps<IProps>(), {
  list: () => [],
  loading: false,
  error: null,
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error {{ error }}</div>
  <template v-else>
    <EntityProductCard
      v-for="product in list"
      :key="product.name"
      :product="product"
    />
  </template>
</template>

<style scoped lang="scss"></style>
