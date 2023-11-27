<script setup lang="ts">
interface IProps {
  rating?: number;
  price?: number;
  kitchen?: string;
}

withDefaults(defineProps<IProps>(), {
  kitchen: null,
  price: null,
  rating: null,
});
</script>

<template>
  <div class="card-info">
    <div v-if="rating !== null" class="rating">
      {{ rating }}
    </div>
    <div v-if="price !== null" class="price">От {{ price }} ₽</div>
    <div v-if="kitchen !== null" class="category">{{ kitchen }}</div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .rating {
    background-image: url("assets/img/icon/rating.svg");
    background-repeat: no-repeat;
    background-position: 0 7px;
    padding-left: 20px;
    margin-right: 26px;
    color: #ffc107;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
  }

  .price,
  .category {
    color: #8c8c8c;
    font-size: 18px;
    line-height: 32px;
  }

  .price {
    margin-right: 10px;
  }
}

@include for-tablet-only {
  .card-info {
    flex-wrap: wrap;
  }
  .rating {
    flex-basis: 100%;
  }

  .card-price-bold {
    margin-left: 20px;
  }
}
</style>
