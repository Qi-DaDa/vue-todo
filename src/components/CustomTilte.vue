<!-- 头部组件 -->
<!-- <script setup lang="ts">
interface Props {
  message: string,
}
withDefaults(defineProps<Props>(), {
  message: 'TODOLIST',
})
</script> -->

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    message: String
  },
  setup(props) {
    console.log(props);
  }
})
</script>

<template>
  <div class="custom_title">{{ message }}</div>
</template>
<style scoped>
.custom_title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>