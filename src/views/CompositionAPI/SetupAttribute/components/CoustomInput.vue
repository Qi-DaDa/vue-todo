<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入内容~'
  },
  defaultKeyword: {
    type: String,
    default: '',
    required: true
  }
})
const emit = defineEmits<{
  (e: 'submit', params: { keyword: string }): void
}>()
const inputDom = ref<HTMLInputElement | null>()
const keyword = ref<string>(props.defaultKeyword)
onMounted(() => {
  inputDom.value?.focus()
})
// 提交
const onSubmit = () => {
  emit('submit', { keyword: keyword.value })
}
</script>
<template>
  <div class="custom_input">
    <input :placeholder="placeholder" type="text" v-model="keyword" ref="inputDom" @keydown.enter="onSubmit" />
    <button @click="onSubmit">确定</button>
  </div>
</template>
<style scoped>
.custom_input {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 100px;
}

.custom_input input {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  height: 40px;
  border-radius: 5px;
  padding: 0px 10px;
}

.custom_input button {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
</style>