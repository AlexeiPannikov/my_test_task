<template>
  <Container>
    <header class="header">
      <NuxtLink to="/" class="logo">
        <img src="~assets/img/icon/logo.svg" alt="Logo"/>
      </NuxtLink>
      <label class="address">
        <FeatureInputDeliveryAddress/>
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <FeatureLogin/>
        <FeatureCart/>
        <FeatureLogout/>
      </div>
    </header>
  </Container>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  .address {
    flex: 0.8;
  }

  .buttons {
    display: flex;
    align-items: center;
  }
}

@include for-mobile-lg-only {
  .header {
    flex-wrap: wrap;

    .address {
      min-width: 100%;
      order: 1;
    }
  }
}

@include for-mobile-only {
  .buttons {
    flex-wrap: wrap;
    margin-left: auto;
  }
}
</style>