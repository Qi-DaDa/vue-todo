 <!-- 侧边栏-组合式setup -->
<script setup>
import { ref, computed, watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const isCollapse = ref(false)
const computedCollapse = computed(() => `${isCollapse.value}1`)
/**
 * 组件导入直接使用
 */
const props = defineProps(['aa', 'bb'])// props.aa
const emit = defineEmits(['onAa', 'onBb'])// emit('onAa')
watch(isCollapse, newIsCollapse => {
  console.log('watch监听', newIsCollapse);
})
onBeforeMount(() => {
  console.log('onBeforeMount', 'LayoutAside-setup');
})
onMounted(() => {
  console.log('onMounted', 'LayoutAside-setup');
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', 'LayoutAside-setup');
})
onUpdated(() => {
  console.log('onUpdated', 'LayoutAside-setup');
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount', 'LayoutAside-setup');
})
onUnmounted(() => {
  console.log('onUnmounted', 'LayoutAside-setup');
})
// 切换
const onCollapseSwitch = (e) => {
  isCollapse.value = !isCollapse.value
}
</script>
<template>
  <div class="layout_aside">
    <button @click="onCollapseSwitch">开关{{ computedCollapse }}</button>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-sub-menu index="1">
        <template #title>
          哈哈哈哈哈哈
        </template>
        <el-menu-item index="1-1">
          <RouterLink to="/option">选项式API</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-1">
          <RouterLink to="/composition">组合式API</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-1">
          <RouterLink to="/life">生命周期</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-1">
          <RouterLink to="/study">学习</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-1">
          <RouterLink to="/jsx">jsx</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-1">
          <RouterLink to="/render">render函数</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <template #title>
          <RouterLink to="/composition">组合式API</RouterLink>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
.layout_aside {
  height: 100%;
  border-right: 2px solid #ccc;
}
</style>
