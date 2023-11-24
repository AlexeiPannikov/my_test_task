<script setup lang="ts">
import {Restaurant} from "~/components/entity/restaurant/Restaurant";
import {RestaurantMapper} from "~/components/entity/restaurant/RestaurantMapper";

const {$api} = useNuxtApp()

const {data, pending, error} = await $api.partners.getPartners({
  transform: (input): any => ({
    success: true,
    data: input.data?.map(item => RestaurantMapper.toDomain(item))
  })
})
</script>

<template>
  <div v-if="pending">
      Loading...
  </div>
  <div v-else-if="error">
    Error {{error}}
  </div>
  <template v-else>
    <EntityRestaurantCard
        v-for="partner in data?.data as Restaurant[]"
        :key="partner?.name"
        :data="partner"
    />
  </template>
</template>

<style scoped lang="scss">

</style>