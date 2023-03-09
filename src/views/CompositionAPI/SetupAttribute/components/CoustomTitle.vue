<!-- 标题 -->
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
</script>
<template>
  <div class="custom_title">
    <div>
      <slot name="titleLeft" message="123456"></slot>
    </div>
    <div class="title_center">{{ title }}</div>
    <div>
      <slot name="titleRight" :number="6"></slot>
    </div>
</div>
</template>
<style scoped>
.custom_title {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  align-items: center;
  justify-items: center;
  grid-template-rows: 60px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.title_center {
  font-size: 26px;
  font-weight: bold;
}
</style>