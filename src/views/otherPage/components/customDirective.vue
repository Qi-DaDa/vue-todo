<!-- 自定义指令 -->
<script setup>
// 组合式=setup
const vFocus = {
  mounted: (el) => {
    el.focus()
  }
}
</script>
<!-- <script>
// 选项式
export default {
  directives: {
    focus: {
      mounted: (el, b, c, d) => {
        el.focus()
      }
    }
  },
}
</script> -->
<template>
  <h2>局部自定义指令</h2>
  <input v-focus placeholder="自定义指令--默认选中" />
  <h2>全局自定义指令</h2>
  <div v-red>全局自定义指令-改变字体颜色</div>
</template>
<style lang="scss" scoped></style>