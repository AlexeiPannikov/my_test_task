<script setup lang="ts">
import {useAsyncData} from "#app";
import {ProductsMapper} from "~/components/entity/product/models/ProductsMapper";
import {PartnerMapper} from "~/components/entity/restaurant/models/PartnerMapper";

const route = useRoute();
const router = useRouter();
const sort = ref("price");
const searchText = ref<string>("");
const order = ref<string>("");

const {data, pending, error} = useAsyncData(
    () =>
        $fetch(`/api/partners/${route.params.restaurant}`, {
          query: {
            order: order.value,
            search_text: searchText.value || undefined,
            sort: sort.value,
          },
          onResponse: () => {
            router.push({
              ...route,
              query: {
                ...route.query,
                order: order.value,
                search_text: searchText.value,
              },
            });
          },
        }),
    {
      watch: [searchText, order],
      immediate: false,
      transform: (input) => {
        return {
          restaurant: PartnerMapper.toDomain(input.restaurant),
          products: input.products.map((item) => ProductsMapper.toDomain(item)),
        };
      },
    },
);

watch(data, () => {
  useHead({
    title: data?.value?.restaurant?.name
  })
})

onMounted(() => {
  order.value = (route.query.order as string) || undefined;
  searchText.value = route.query.search_text as string;
});
</script>

<template>
  <NuxtLayout name="default">
    <Container>
      <div class="section-heading">
        <div class="left-block">
          <UiSectionTitle>{{ data?.restaurant.name }}</UiSectionTitle>
          <UiCardInfo
              :kitchen="data?.restaurant.kitchen"
              :rating="data?.restaurant.stars"
              :price="data?.restaurant.price"
          />
        </div>
        <div class="right-block">
          <button
              class="order"
              @click="order === 'asc' ? (order = 'desc') : (order = 'asc')"
          >
            {{ order === "desc" ? "Сначала дешевые" : "Сначала дорогие" }}
          </button>
          <UiInputBase v-model="searchText" :debounce="300" class="search"/>
        </div>
      </div>
      <div class="cards cards-restaurants">
        <EntityProductCardList
            :list="data?.products"
            :loading="pending"
            :error="error"
        />
      </div>
    </Container>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
  justify-content: space-between;

  .left-block {
    display: flex;
  }

  .right-block {
    display: flex;
  }

  .search {
    max-width: 300px;
    flex: 1;
    background-image: url("assets/img/icon/search.svg");
    padding-left: 35px;
  }

  .order {
    margin-right: 20px;
    cursor: pointer;
  }

  .card-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
