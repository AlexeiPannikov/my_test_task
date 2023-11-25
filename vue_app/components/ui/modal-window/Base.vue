<script setup lang="ts">
interface IProps {
  isOpen: boolean;
  excludeId?: string
}

const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
  excludeId: ""
})

const emit = defineEmits(["update:isOpen"])

const modalDialog: globalThis.Ref = ref(null)

const onClickOutside = (e: MouseEvent) => {
  const el = document.getElementById(props.excludeId)
  const target = e.target as Node
  if (!modalDialog.value?.contains(target) && !el?.contains(target)) {
    console.log("-----")
    emit("update:isOpen", false)
  }
}

watch(() => props.isOpen, () => {
  if (props.isOpen) {
    setTimeout(() => document.addEventListener("click", onClickOutside))
  } else {
    document.removeEventListener("click", onClickOutside)
  }
})

onUnmounted(() => {
  document.removeEventListener("click", onClickOutside)
})
</script>

<template>
  <teleport v-if="isOpen" to="body">
    <div class="modal-dialog-wrapper">
      <div
          ref="modalDialog"
          class="modal-dialog"
      >
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
  }
}
</style>