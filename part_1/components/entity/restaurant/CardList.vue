<script setup lang="ts">
import { PartnerMapper } from "~/components/entity/restaurant/models/PartnerMapper";

const { data, pending, error } = useAsyncData(
  "partners",
  () => $fetch("/api/partners"),
  {
    transform: (input) => input.map((item) => PartnerMapper.toDomain(item)),
  },
);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error {{ error }}</div>
  <template v-else>
    <EntityRestaurantCard
      v-for="partner in data"
      :key="partner.name"
      :data="partner"
    />
  </template>
</template>

<style scoped lang="scss"></style>
