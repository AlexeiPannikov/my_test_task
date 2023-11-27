<template>
  <div class="default-layout">
    <AppHeader />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.default-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .main {
    background: linear-gradient(
      180deg,
      rgba(245, 245, 245, 0) 1.04%,
      #f5f5f5 100%
    );
    flex: 1 1 auto;
  }
}
</style>
