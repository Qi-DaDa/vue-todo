<!-- demo页面 -->
<script setup>
import { useCssModule } from "vue";
// import styles from './index.module.scss';
</script>
<template>
  <div :class="$style.aa">demo页面</div>
</template>

<!-- <style lang="scss" scoped> -->
<style lang="scss" module>
@import url('./index.module.scss');

.aa {
  background: #ccc;
}
</style>