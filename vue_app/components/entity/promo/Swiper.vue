<script setup lang="ts">
import { Promo } from "~/components/entity/promo/Promo";

interface IProps {
  list: Promo[];
}

withDefaults(defineProps<IProps>(), {
  list: () => [],
});
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    class="promo-swiper"
    :effect="'creative'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="(item, idx) in list" :key="idx">
      <EntityPromoCard :data="item" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.promo-swiper {
  margin-bottom: 56px;
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
}
</style>
