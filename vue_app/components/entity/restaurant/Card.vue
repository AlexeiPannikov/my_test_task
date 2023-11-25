<script setup lang="ts">
import {Restaurant} from "~/components/entity/restaurant/Restaurant";

interface IProps {
  data: Restaurant
}

withDefaults(defineProps<IProps>(), {
  data: () => new Restaurant()
})
</script>

<template>
  <NuxtLink
      to="/"
      class="card card-restaurant"
  >
    <img
        :src="`_nuxt/assets/${data.image}`"
        alt="image"
        class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{data.name}}</h3>
        <span class="card-tag tag">{{data.time_of_delivery}} мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">
          {{data.stars}}
        </div>
        <div class="price">От {{data.price}} ₽</div>
        <div class="category">{{data.kitchen}}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
  </NuxtLink>
</template>

<style scoped lang="scss">
.card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 30px;
  flex-basis: 31%;
  text-decoration: none;

  .card-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    .card-title {
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 32px;
    }

    .card-tag {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      color: #ffffff;
      background: #262626;
      border-radius: 2px;
      padding: 1px 8px;
    }
  }

  .card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }


  .card-text {
    padding: 20px 23px 35px;
    min-height: auto;
    display: flex;
    flex-direction: column;
  }

  .card-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .rating {
      background-image: url("assets/img/icon/rating.svg");
      background-repeat: no-repeat;
      background-position: 0 7px;
      padding-left: 20px;
      margin-right: 26px;
      color: #ffc107;
      font-weight: bold;
      font-size: 18px;
      line-height: 32px;
    }

    .price,
    .category {
      color: #8c8c8c;
      font-size: 18px;
      line-height: 32px;
    }

    .price {
      margin-right: 10px;
    }
  }
}

.card-restaurant {
  cursor: pointer
}

@include for-tablet-lg-only {
  .card {
    flex-basis: 49%;
  }
}

@include for-tablet-only {
  .card-info {
    flex-wrap: wrap;
  }

  .card .rating {
    flex-basis: 100%;
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    min-height: 290px;
  }

  .card-price-bold {
    margin-left: 20px;
  }
}

@include for-mobile-lg-only {
  .card {
    flex-basis: 100%;
  }

  .card-text {
    min-height: auto;
  }

  .card-image {
    width: 100%;
  }
}
</style>