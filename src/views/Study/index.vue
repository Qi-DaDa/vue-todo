<!-- 选项式 -->
<!-- <script>
export default ({
  data() {
    return ({
      count: 0
    })
  },
  methods: {
    handleCount() {
      this.count++
      console.log(123,);
    }
  }
})
</script> -->
<!-- 组合式 -->
<script setup>
import { ref, computed, watch, provide } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from '@/stores/counter'
import Son from "./son.vue";
const store = useCounterStore()
const { increment } = useCounterStore()
const { doubleCount } = storeToRefs(useCounterStore())
const count = ref(0)
// 修改响应式数据
const handleCount = (a) => {
  count.value++
  increment()
}
// 计算属性
const countComputed = computed(() => {
  return count.value + 2
})
watch(count, (n, o) => {
  console.log(n, o);
}, { immediate: true })
// 获取元素
const domRef = ref(null)
console.log('domRef==>', domRef);
// 获取组价
const comRef = ref(null)
console.log('comRef==>', comRef);
// 提供数据
provide('count', count)
</script>
<template>
  <div class="container">
    <button @click="handleCount">按钮{{ count }} pinia=》{{ store.count }}</button>
    <button>计算属性computer{{ countComputed }}==>{{ doubleCount }}</button>
    <button>watch监听{{ count }}</button>
    <div style="border: 1px solid red;" ref="domRef">
      <div>子组件</div>
      <Son message="父组件count：" :count="count" @handle-count="handleCount" ref="comRef" />
    </div>
  </div>
</template>
<style scoped>
.container {
  font-size: 30px;
}

button {
  border: 1px solid red;
  padding: 2px 5px;
}
</style>