<script setup lang="ts">


import { ref, onMounted, type Ref, watch, unref, onActivated, onDeactivated, defineAsyncComponent } from "vue";
// const CustomTabs = defineAsyncComponent(() => import('./components/CustomTabs.vue'))
const CoustomTitle = defineAsyncComponent(() => import('./components/CoustomTitle.vue'))
const CoustomInput = defineAsyncComponent(() => import('./components/CoustomInput.vue'))
const CustomList = defineAsyncComponent(() => import('./components/CustomList.vue'))
const CustomMessage = defineAsyncComponent(() => import('./components/CustomMessage.vue'))
const tableList = ref<{ key: number, title: string }[]>([])
const isOpen = ref<boolean>(false)
// 添加
const onAdd = ({ keyword }: { keyword: string }) => {
  const lists = tableList.value
  if (lists.length < 6) {
    lists.unshift({ key: lists.length, title: keyword })
  } else {
    isOpen.value = true
  }
}
// 删除
const onDelete = (params: { key: number }) => {
  const lists = tableList.value
  const newLists = lists.filter(item => item.key !== params.key);
  tableList.value = (newLists);
}
// const vAa = {
//   mounted: (el) => {
//     console.log(el);
//   }
// }
onActivated((e: any) => {
  console.log(e);

  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated((e: any) => {
  console.log(e);
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})

</script>
<template>
  <CoustomTitle title="组合式API-attribute">
    <template #titleRight="{ number }">
      <div style="font-weight:bold">
        <span style="color: red">{{ tableList.length }}</span>
        <span>&nbsp;/&nbsp;</span>
        <span>{{ number }}</span>
      </div>
    </template>
  </CoustomTitle>
  <CoustomInput style="margin:20px" placeholder="请输入添加内容~" defaultKeyword="组合式API-attribute(语法糖)" @submit="onAdd" />
  <CustomList :tableList="tableList" @delete="onDelete" />
  <CustomMessage :open="isOpen" title="最多可添加6条" @close="isOpen = false" />
</template>
<style scoped></style>