<!-- 孙组件 -->
<script setup>
import { inject } from "vue";
const count = inject('count')
</script>
<template>
  <div class="grandsom">
    孙组件{{ count }}
  </div>
</template>
<style scoped>
.grandsom {
  height: 30px;
  border: 1px dotted yellow;
}
</style>