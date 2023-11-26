<script setup lang="ts">
import { UserMapper } from "~/components/entity/user/UserMapper";
import { useUserStore } from "~/components/entity/user/UserStore";

const isOpen = ref(false);
const login = ref("");
const password = ref("");
const user = useUserStore();

const { execute, data, error } = useAsyncData(
  () =>
    $fetch("/api/auth/login", {
      method: "POST",
      body: { login: login.value, password: password.value },
    }),
  {
    immediate: false,
    server: true,
    transform: (input) => (input ? UserMapper.toDomain(input) : input),
  },
);

const onSubmit = () => {
  execute().then(() => {
    if (!error.value) {
      if (data.value) {
        isOpen.value = false;
        user.value = data.value;
      }
    }
  });
};
</script>

<template>
  <UiButtonPrimary class="login-button" @click="isOpen = true">
    <template #icon>
      <span class="button-auth-svg"></span>
    </template>
    <span>Войти</span>
  </UiButtonPrimary>

  <UiModalWindowBase v-model:is-open="isOpen">
    <form id="logInForm" @submit.prevent="onSubmit">
      <fieldset class="modal-body">
        <UiModalWindowTitle>Авторизация</UiModalWindowTitle>
        <label class="label-auth">
          <span>Логин</span>
          <UiInputBase id="login" v-model="login" type="text" />
        </label>
        <label class="label-auth">
          <span>Пароль</span>
          <UiInputBase id="password" v-model="password" type="password" />
        </label>
      </fieldset>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <div class="error">{{ error?.statusMessage }}</div>
        <div class="footer-buttons">
          <UiButtonPrimary type="submit"> Войти</UiButtonPrimary>
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

.label-auth {
  display: block;
  margin: 30px;
}

.label-auth span {
  width: 80px;
  display: inline-block;
}

.modal-body {
  margin-bottom: 22px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .error {
    color: red;
    margin-right: 40px;
  }
}
</style>
