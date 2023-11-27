<template>
  <section class="promo" :class="data.backgroundClass">
    <h1 class="promo-title" v-html="data.title"></h1>
    <p class="promo-text">
      {{ data.text }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { Promo } from "~/components/entity/promo/Promo";

interface IProps {
  data: Promo;
}

withDefaults(defineProps<IProps>(), {
  data: () => new Promo(),
});
</script>

<style scoped lang="scss">
.pizza {
  background: #fff1b8 url("assets/img/promo/pizza.png") no-repeat top -100px right -250px /
    830px;
}

.kebab {
  background: #d6e4ff url("assets/img/promo/kebab.png") no-repeat top 45px right
    40px / 450px;
}

.vegetables {
  background: #fff566 url("assets/img/promo/vegetables.png") no-repeat top 0
    right 0 / 825px;
}

.sushi {
  background: #fff1f0 url("assets/img/promo/sushi.png") no-repeat top 10px right
    15px / 500px;
}

.promo {
  padding: 68px 70px;
  background-repeat: no-repeat;
  background-position: top -100px right -250px;
  background-size: auto;

  .promo-title {
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
    line-height: 46px;
    color: #302c34;
  }

  .promo-text {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #302c34;
    max-width: 538px;
  }
}

@include for-tablet-lg-only {
  .promo-text {
    font-size: 18px;
    max-width: 400px;
  }
}

@include for-tablet-only {
  //.pizza {
  //  background-size: 400px;
  //  background-position: bottom 50px right -200px;
  //}
  //
  //
  //.kebab {
  //  background-position: top -5px right -74px;
  //  background-size: 300px;
  //}
  //
  //.vegetables {
  //  background-position: top 0 right -240px;
  //  background-size: 702px;
  //}
  //
  //.sushi {
  //  background-position: top -24px right -75px;
  //  background-size: 302px;
  //}

  .promo-title {
    font-size: 24px;
    line-height: 1.4;
  }

  .promo-text {
    margin-top: 0;
  }
}

@include for-mobile-lg-only {
  .promo {
    background-image: none;
  }

  .promo-title {
    margin-bottom: 10px;
  }
}

@include for-mobile-only {
  .promo {
    padding: 20px;
  }
}
</style>
