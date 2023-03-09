<!-- todo-列表 -->
<script setup lang="ts">
interface Props {
}
defineProps(['dataSource'])



</script>
<template>
  <div class="custom_list">
    <div class="custom_cell" v-for="(item, key) in dataSource" :key="key">
      <div>{{ key }}</div>
      <div>{{ item.title }}</div>
    </div>

  </div>
</template>
<style scoped>
.custom_list {
  max-height: 400px;
  overflow-y: auto;
}

.custom_cell {
  margin: 0 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20px 1fr;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>