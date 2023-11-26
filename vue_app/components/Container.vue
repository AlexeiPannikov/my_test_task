<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @include for-desktop-only {
    max-width: 960px;
  }

  @include for-tablet-lg-only {
    max-width: 750px;
  }

  @include for-tablet-only {
    max-width: 560px;
  }

  @include for-mobile-lg-only {
    width: 90%;
  }
}
</style>
