<!-- 其他页面 -->
<script setup>
import CustomDirective from "./components/customDirective.vue";
import styleOption from "./components/stylesOption.vue";

</script>
<template>
  <CustomDirective />
  <hr />
  <h2>全局组件</h2>
  <GlobalComponent>
    全局组件
  </GlobalComponent>
  <hr />
  <styleOption />
  <br />
  <hr />
</template>
<style lang="scss" scoped></style>