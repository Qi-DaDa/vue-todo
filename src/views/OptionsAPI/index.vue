<script lang="ts">
import CustomTilte from "./components/CustomTilte.vue";
import CustonInput from "./components/CustonInput.vue";
import CustomList from "./components/CustomList.vue";
import CustomMessage from "./components/CustomMessage.vue";
export default {
  components: { CustomTilte, CustonInput, CustomList, CustomMessage },
  data() {
    return ({
      tableList: [],
      isOpen: false
    })
  },
  methods: {
    // 添加
    onAdd({ keyword }: { keyword: string }) {
      const lists = this.tableList
      if (lists.length < 6) {
        lists.unshift({ key: lists.length, title: keyword })
      } else {
        this.isOpen = true
      }
    },
    // 删除
    onDelete(params: { key: number }) {
      const lists = this.tableList
      const newLists = lists.filter(item => item.key !== params.key);
      this.tableList = newLists
    }
  }
}

</script>
<template>
  <CustomTilte title="选项式API">
    <template #titleRight="params">
      <div>{{ tableList.length }}/{{ params.number }}</div>
    </template>
  </CustomTilte>
  <CustonInput placeholder="请输入内容~" @submit="onAdd" style="padding:20px" defaultKeyword="选项式API" />
  <CustomList :tableList="tableList" @delete="onDelete" />
  <CustomMessage :open="isOpen" title="最多可添加6条" @close="this.isOpen = false" />
</template>