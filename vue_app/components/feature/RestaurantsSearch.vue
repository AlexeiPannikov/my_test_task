<script setup lang="ts">
import { PartnerMapper } from "~/components/entity/restaurant/models/PartnerMapper";

const text = ref("");

useAsyncData(
  "partners",
  () => $fetch("/api/partners", { query: { search_text: text.value } }),
  {
    immediate: false,
    watch: [text],
    transform: (input) => input.map((item) => PartnerMapper.toDomain(item)),
  },
);
</script>

<template>
  <UiInputBase
    v-model="text"
    class="input-search"
    placeholder="Поиск блюд и ресторанов"
    :debounce="300"
  />
</template>

<style scoped lang="scss">
.input-search {
  width: 300px;
  background-image: url("assets/img/icon/search.svg");
  padding-left: 35px;
}
</style>
