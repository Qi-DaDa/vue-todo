<script lang="ts">
export default {
  props: ['nums'],
  data() { return { num: 0 } },
  beforeCreate() {
    console.log('beforeCreate=>', '在组件实例初始化完成之后立即调用。');
  },
  beforeMount() {
    console.log('beforeMount', '在组件被挂载之前调用。');
  },
  mounted() {
    console.log('mounted=>', '在组件实例处理完所有与状态相关的选项后调用。');
  },
  beforeUpdate() {
    console.log('beforeUpdate=>', '在组件即将因为一个响应式状态变更而更新其 DOM 树之前调用。');
  },
  updated() {
    console.log('updated=>', '在组件因为一个响应式状态变更而更新其 DOM 树之后调用。');
  },
  beforeUnmount() {
    console.log('beforeUnmount=>', '在一个组件实例被卸载之前调用。');
  },
  unmounted() {
    console.log('unmounted=>', '在一个组件实例被卸载之后调用。');
  },
  methods: {
    onChangeNum() {
      this.num = this.num + 1
    }
  }
}
</script>
<template>
  <div class="container">
    <div>父组件{{ nums }}</div>
    <div>子组件{{ num }}</div>
    <button @click="onChangeNum" class="btn">子组件点击</button>
  </div>
</template>
<style scoped>
.container {
  padding: 15px;
}

.btn {
  padding: 10px 30px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: pointer;
}
</style>