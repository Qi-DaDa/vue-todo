<script lang="ts">
import { ref } from "vue";
import CustomTitle from "./component/CustomTitle.vue";
import CustomInput from "./component/CustomInput.vue";
import CustomList from "./component/CustomList.vue";
import CustomMessage from "./component/CustomMessage.vue";
export default {
  components: {
    CustomTitle, CustomInput, CustomList, CustomMessage
  },
  setup: () => {
    const tableList = ref<{ key: number, title: string }[]>([])// 列表
    const isOpen = ref<Boolean>(false)//提示弹窗
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
    return { tableList, isOpen, onAdd, onDelete }
  },
}
</script>
<template>
  <CustomTitle title="组合式API-function">
    <template #titleRight="{ number }">
      <span style="color: red">{{ tableList.length }}</span>
      <span>&nbsp;/&nbsp;</span>
      <span>{{ number }}</span>
    </template>
  </CustomTitle>
  <CustomInput style="margin:20px" @submit="onAdd" defaultKeyword="组合式API-function(原始写法)" />
  <CustomList :tableList="tableList" @delete="onDelete" />
  <CustomMessage :open="isOpen" @close="isOpen = false" title="最多可添加6条" />
</template>
<style scoped></style>