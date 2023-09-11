<!-- 组合式插槽组件 -->
<script setup>
</script>

<template>
  <div>
    <h2>组合式setup插槽组件</h2>
    <slot :count="1"></slot>
    <slot name="slot1" :count="1"></slot>
    <slot name="slot2"></slot>
  </div>
</template>

<style scoped lang="scss"></style>


