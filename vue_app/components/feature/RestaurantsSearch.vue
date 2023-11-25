<script setup lang="ts">
import {RestaurantMapper} from "~/components/entity/restaurant/RestaurantMapper";
import type {BaseResponse} from "~/repository/modules/BaseResponse";
import type {GetPartnersResponseItem} from "~/repository/modules/partners/models/GetPartnersResponseItem";
import {PartnersModule} from "~/repository/modules/partners/PartnersModule";

const text = ref("")

useAsyncData(
    PartnersModule.PARTNERS_KEY,
    () => $fetch<BaseResponse<GetPartnersResponseItem[]>>("http://localhost:3000/api/partners", {query: {search_text: text.value}}),
    {
      lazy: true,
      watch: [text],
      transform: (input) => ({
        success: true,
        data: input?.data?.map(item => RestaurantMapper.toDomain(item)),
      })
    }
)
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