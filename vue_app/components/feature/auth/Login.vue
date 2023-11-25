<script setup lang="ts">

const isOpen = ref(false)
</script>

<template>
  <UiButtonPrimary class="login-button" @click="isOpen = true">
    <template #icon>
      <span class="button-auth-svg"></span>
    </template>
    <template #text>
      <span class="button-text">Войти</span>
    </template>
  </UiButtonPrimary>

  <UiModalWindowBase
      v-model:is-open="isOpen"
  >
    <form id="logInForm">
      <fieldset class="modal-body">
        <legend class="modal-title">Авторизация</legend>
        <label class="label-auth">
          <span>Логин</span>
          <UiInputBase id="login" type="text" />
        </label>
        <label class="label-auth">
          <span>Пароль</span>
          <UiInputBase id="password" type="password" />
        </label>
      </fieldset>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <div class="footer-buttons">
          <UiButtonPrimary type="submit">
            <template #text>
              Войти
            </template>
          </UiButtonPrimary>
        </div>
      </div>
    </form>
  </UiModalWindowBase>
</template>

<style scoped lang="scss">
.login-button {
  .button-auth-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    display: block;
    -webkit-mask: url("assets/img/icon/user.svg") no-repeat 50% 50%;
    mask: url("assets/img/icon/user.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
  }

  &:hover .button-auth-svg {
    background-color: #595959;
  }
}
</style>