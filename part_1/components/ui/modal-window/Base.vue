<script setup lang="ts">
interface IProps {
  isOpen: boolean;
}

withDefaults(defineProps<IProps>(), {
  isOpen: false,
});

const emit = defineEmits(["update:isOpen"]);

const onClose = () => {
  emit("update:isOpen", false);
};
</script>

<template>
  <teleport v-if="isOpen" to="body">
    <div
      class="modal-dialog-wrapper"
      @click.self.stop="emit('update:isOpen', false)"
    >
      <div class="modal-dialog">
        <button class="close" @click="onClose">×</button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.modal-dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 999;

  .modal-dialog {
    max-width: 780px;
    width: 95%;
    background: #ffffff;
    border-radius: 5px;
    margin: auto;
    padding: 40px 45px;
    display: flex;
    flex-direction: column;
    position: relative;

    .close {
      font-size: 36px;
      border: none;
      background-color: transparent;
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
}
</style>
