<script setup lang="ts">
import type { Partner } from "~/components/entity/restaurant/models/Partner";

interface IProps {
  data: Partner | null;
}

const props = withDefaults(defineProps<IProps>(), {
  data: null,
});

const router = useRouter();

const goToRestaurant = () => {
  router.push({
    name: "restaurant",
    params: { restaurant: props.data.products.split(".")[0] },
  });
};
</script>

<template>
  <UiCardBase class="card card-restaurant" @click="goToRestaurant">
    <img :src="`_nuxt/assets/${data?.image}`" alt="image" class="card-image" />
    <UiCardText>
      <template #title>
        {{ data.name }}
      </template>
      <template #title-additional>
        <span class="card-tag tag">{{ data?.time_of_delivery }} мин</span>
      </template>
      <UiCardInfo
        :kitchen="data.kitchen"
        :rating="data.stars"
        :price="data.price"
      />
    </UiCardText>
  </UiCardBase>
</template>

<style scoped lang="scss">
.card-restaurant {
  cursor: pointer;

  .card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .card-tag {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    background: #262626;
    border-radius: 2px;
    padding: 1px 8px;
  }
}

@include for-mobile-lg-only {
  .card-image {
    width: 100%;
  }
}
</style>
