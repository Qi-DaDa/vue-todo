<script setup lang="ts">
import { ref, type Ref } from "vue";
interface Props {
  placeholder: string
}
const emit = defineEmits(['submit'])
let keyword: Ref<string> = ref('')
defineProps({
  placeholder: {
    type: String,
    default: '请输入内容1'
  }
})
// defineProps(['placeholder'])
// withDefaults(defineProps<Props>(), {
//   placeholder: '请输入内容2',
// })
</script>
<template>
  <div class="custom_input">
    <input :placeholder="placeholder" type="text" name="search" id="search" v-model="keyword"
      @keyup.enter="$emit('submit', { keyword })" />
    <!-- <button type="button" @click="$emit('submit', { keyword })">确定</button> -->
    <button type="button" @click="emit('submit', { keyword })">确定</button>
  </div>
</template>

<style scoped>
.custom_input {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-gap: 20px;
}

.custom_input input {
  height: 40px;
  flex: 1;
  border-radius: 5px;
  padding: 0px 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
}

.custom_input button {
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
}
</style>