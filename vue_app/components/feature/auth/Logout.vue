<template>
  <UiButtonPrimary class="button-out" @click="logout">
    <template #icon>
      <span class="button-out-svg"></span>
    </template>
    Выйти
  </UiButtonPrimary>
</template>

<script setup lang="ts">
import { useUserStore } from "~/components/entity/user/UserStore";

const user = useUserStore();

const logout = () => {
  user.value = null;
};
</script>
<style scoped lang="scss">
.button-out {
  margin: 0 5px;

  .button-out-svg {
    width: 24px;
    height: 24px;
    display: block;
    background-color: #fff;
    -webkit-mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }

  &:hover .button-out-svg {
    background-color: #595959;
  }
}

@include for-mobile-only {
  .button-out-svg {
    width: 24px;
    height: 24px;
    display: block;
    background-color: #fff;
    -webkit-mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    mask: url("assets/img/icon/logout.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }
}
</style>
