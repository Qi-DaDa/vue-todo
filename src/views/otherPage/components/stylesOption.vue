<!-- style书写 -->
<script setup>
import { useCssModule } from "vue";
import styles from './stylesOption.module.scss';
</script>
<template>
  <h2>style书写</h2>
  <div :class="styles.box1">import模块化引入</div>
  <div :class="$style.box2">module模块化$style</div>
  <div :class="custom.box3">module模块化 自定义</div>
  <div class="box4">scoped作用域</div>
  <div class="box5">scoped作用域引入@import</div>
</template>

<!-- <style lang="scss" scoped> -->
<style lang="scss" module>
.box2 {
  color: green;
}
</style>
<style lang="scss" module="custom">
.box3 {
  color: blue;
}
</style>
<style lang="scss" scoped>
.box4 {
  color: orange;
}
</style>

<style lang="scss" scoped>
@import url('./stylesOption.module.scss');

.box5 {
  color: orange;
}
</style>

<!-- @import url('./stylesOption.module.scss');

.aa {
  background: #ccc;
} -->