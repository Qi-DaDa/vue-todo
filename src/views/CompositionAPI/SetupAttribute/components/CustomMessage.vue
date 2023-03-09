<script setup lang="ts">
import { watch, ref, watchEffect } from 'vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})
const emits = defineEmits<{
  (e: 'close'): void
}>()
watch(() => props.open, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      emits('close')
    }, 2000);
  }
})
</script>
<template>
  <Teleport to="body">
    <Transition>
      <div v-if="open" class="custom_message">
        <div>{{ title }}{{ open }}</div>
        <div @click="emits('close')">X</div>
      </div>
    </Transition>
  </Teleport>

</template>
<style scoped>
.custom_message {
  position: absolute;
  transform: translate(-50%, 50%);
  left: 50%;
  top: 0px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-gap: 10px;
  min-width: 100px;
  text-align: center;
  z-index: 999;
}

.custom_message>div:last-child {
  cursor: pointer;
  font-weight: bold;
}

.custom_message>div:last-child:hover {
  color: red;
}

.v-enter-active,
.v-leave-active {
  transition: 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>