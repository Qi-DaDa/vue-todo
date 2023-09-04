<script setup lang="ts">
// import { defineProps } from "vue";
type List = {
  id: number,
  title: string
}
const props = defineProps({
  active: {
    type: Number,
    default: 1,
  },
  tableList: {
    type: Array<List>,
    default: () => []
  }
})
const emit = defineEmits<{
  (e: 'onChage', params: { active: number }): void
}>()
// 切换tabs
const onChage = (activeId: number) => {
  if (props.active !== activeId) {
    emit('onChage', { active: activeId })
  }
}
</script>
<template>
  <div class="custom_tabs">
    <div v-for="item in tableList" :key="item.id" :class="active === item.id ? 'active' : ''" @click="onChage(item.id)">
      {{ item.title }}
    </div>
  </div>
</template>
<style scoped>
.custom_tabs {
  display: flex;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
}

.custom_tabs div {
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

}

.custom_tabs div:hover {
  color: red;
}

.custom_tabs .active {
  color: red;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>