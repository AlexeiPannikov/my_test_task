<script setup lang="ts"></script>

<template>
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title">
        <slot name="title" />
      </h3>
      <slot name="title-additional" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-text {
  padding: 20px 23px 35px;
  min-height: auto;
  display: flex;
  flex-direction: column;

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
  }
}

@include for-tablet-only {
  .card-title {
    font-size: 18px;
  }

  .card-text {
    min-height: 290px;
  }
}

@include for-mobile-lg-only {
  .card-text {
    min-height: auto;
  }
}
</style>
