<template>
  <div class="card">
    <slot />
  </div>
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
  align-self: stretch;
}

@include for-tablet-lg-only {
  .card {
    flex-basis: 49%;
  }
}

@include for-mobile-lg-only {
  .card {
    flex-basis: 100%;
  }
}
</style>
