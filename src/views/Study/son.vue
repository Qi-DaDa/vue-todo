<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
import Grandson from "./grandson.vue";
const props = defineProps({
  message: String,
  count: Number
})
const emit = defineEmits(['handle-count'])
const aa = () => {
  emit('handle-count', '00')
}
onBeforeMount(() => {
  console.log('onBeforeMount');
})
onMounted(() => {
  console.log('onMounted');
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
})
onUpdated(() => {
  console.log('onUpdated');
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
})
onUnmounted(() => {
  console.log('onUnmounted');
})
console.log('setup');
</script>
<template>
  <div @click="aa">{{ message }}{{ count }}</div>
  <Grandson />
</template>