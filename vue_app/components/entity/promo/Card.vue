<template>
  <section
      class="promo"
      :style="{backgroundImage: `url(${data.backgroundImage})`, backgroundColor: data.background}"
  >
    <h1 class="promo-title" v-html="data.title"></h1>
    <p class="promo-text">
      {{data.text}}
    </p>
  </section>
</template>

<script setup lang="ts">
import {Promo} from "~/components/entity/promo/Promo";

interface IProps {
  data: Promo
}

const props = withDefaults(defineProps<IProps>(), {
  data: () => new Promo()
})

const {backgroundImage} = toRefs(props.data)
</script>

<style scoped lang="scss">
.promo {
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
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
</style>