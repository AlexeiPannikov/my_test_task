<template>
  <div id="app">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<script setup>
useSeoMeta({

})

useHead({
  titleTemplate: '%s - доставка еды на дом',
  meta: [
    { name: 'description', content: "food delivery" }
  ],
})
</script>

<style lang="scss">
@import "~/assets/css/normalize.css";
@import "~/assets/css/style.css";
</style>
