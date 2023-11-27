<template>
  <NuxtLayout name="default">
    <Container class="container">
      <section class="container-promo">
        <EntityPromoSwiper :list="promoList" />
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <UiSectionTitle> Рестораны </UiSectionTitle>
          <label class="search">
            <FeatureRestaurantsSearch />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <EntityRestaurantCardList />
        </div>
      </section>
    </Container>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Promo } from "~/components/entity/promo/Promo";

useHead({
  title: "Delivery Food"
})

const promoList = reactive<Promo[]>([
  {
    title: "Онлайн-сервис <br/>доставки еды на дом",
    text: "Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком",
    backgroundClass: "pizza",
  },
  {
    title: "Шашлыки на майские <br> со скидкой 35%",
    text: "Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD",
    backgroundClass: "kebab",
  },
  {
    title: "Скидка 20% на всю еду <br> по промокоду LOVE.JS",
    text: "Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду",
    backgroundClass: "vegetables",
  },
  {
    title: "Сеты со скидкой до 30% <br> в ресторанах",
    text: "Скидки на сеты до 30 мая по промокоду DADADA",
    backgroundClass: "sushi",
  },
]);
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}

.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
}

.search {
  margin-left: auto;
}

@include for-mobile-only {
  .user-name {
    margin: 10px;
  }

  .section-heading {
    flex-wrap: wrap;
  }
}

@include for-mobile-lg-only {
  .section-title {
    font-size: 20px;
  }
}
</style>
