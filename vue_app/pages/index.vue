<template>
  <NuxtLayout name="default">
    <Container class="container">
      <section class="container-promo">
        <EntityPromoCard
            v-for="(item, i) in promoList"
            :key="i"
            :data="item"
        />
<!--        <section class="promo pizza">-->
<!--          <h1 class="promo-title">Онлайн-сервис <br/>доставки еды на дом</h1>-->
<!--          <p class="promo-text">-->
<!--            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком-->
<!--          </p>-->
<!--        </section>-->
        <!-- <section class="promo kebab">
          <h1 class="promo-title">Шашлыки на майские <br> со скидкой 35%</h1>
          <p class="promo-text">
            Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
          </p>
        </section>
        <section class="promo vegetables">
          <h1 class="promo-title">Скидка 20% на всю еду <br> по промокоду LOVE.JS</h1>
          <p class="promo-text">
            Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
          </p>
        </section>
        <section class="promo sushi">
          <h1 class="promo-title">Сеты со скидкой до 30% <br> в ресторанах</h1>
          <p class="promo-text">
            Скидки на сеты до 30 мая по промокоду DADADA
          </p>
        </section> -->
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов"/>
          </label>
        </div>
        <div class="cards cards-restaurants">
          <a href="restaurant.html" class="card card-restaurant">
            <img src="~assets/img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">Пицца плюс</h3>
                <span class="card-tag tag">50 мин</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">От 900 ₽</div>
                <div class="category">Пицца</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </a>
          <!-- /.card -->

          <a href="restaurant.html" class="card card-restaurant">
            <img src="~assets/img/tanuki/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">Тануки</h3>
                <span class="card-tag tag">60 мин</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">От 1 200 ₽</div>
                <div class="category">Суши, роллы</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </a>
          <!-- /.card -->

          <a href="restaurant.html" class="card card-restaurant">
            <img src="~assets/img/food-band/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">FoodBand</h3>
                <span class="card-tag tag">40 мин</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">От 450 ₽</div>
                <div class="category">Пицца</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </a>
          <!-- /.card -->

          <a href="restaurant.html" class="card card-restaurant">
            <img src="~assets/img/palki-skalki/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">Палки скалки</h3>
                <span class="card-tag tag">55 мин</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">От 500 ₽</div>
                <div class="category">Пицца</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </a>
          <!-- /.card -->

          <a href="restaurant.html" class="card card-restaurant">
            <img src="~assets/img/gusi-lebedi/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">Гуси Лебеди</h3>
                <span class="card-tag tag">75 мин</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">От 1 000 ₽</div>
                <div class="category">Русская кухня</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </a>
          <!-- /.card -->

          <a href="restaurant.html" class="card card-restaurant">
            <img src="~assets/img/pizza-burger/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">PizzaBurger</h3>
                <span class="card-tag tag">45 мин</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">От 700 ₽</div>
                <div class="category">Пицца</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </a>
          <!-- /.card -->
        </div>
        <!-- /.cards -->
      </section>
    </Container>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type {Promo} from "~/components/entity/promo/Promo";

const promoList = reactive<Promo[]>([
  {
    title: 'Онлайн-сервис <br/>доставки еды на дом',
    text: "Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком",
    backgroundImage: "_nuxt/assets/img/promo/pizza.png",
    background: "#fff1b8"
  }
])
</script>

<style scoped lang="scss">

</style>