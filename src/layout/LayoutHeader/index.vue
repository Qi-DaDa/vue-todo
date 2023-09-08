 <!-- 头部-组合式setup() -->
<script >
import { computed, h, ref, watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  name: 'LayoutHeader',
  components: {},
  props: ['aa', 'bb'],// props.aa
  emits: ['onAa', 'onBb'],// emit('onAa',{})
  setup(props, { attrs, emit, expose, slots }) {
    const title = ref('layout_header')
    const computedFn = computed(() => '/////computedFn===>' + title.value)
    watch(title, newTilte => { title + '哈哈哈' })
    onBeforeMount(() => {
      console.log('onBeforeMount', 'LayoutHeader-setup()');
    })
    onMounted(() => {
      console.log('onMounted', 'LayoutHeader-setup()');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', 'LayoutHeader-setup()');
    })
    onUpdated(() => {
      console.log('onUpdated', 'LayoutHeader-setup()');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount', 'LayoutHeader-setup()');
    })
    onUnmounted(() => {
      console.log('onUnmounted', 'LayoutHeader-setup()');
    })
    return ({ title, computedFn, props })
  }
}
</script>
<template>
  <div class="layout_header">
    {{ title }}
    {{ computedFn }}
  </div>
</template>
<style scoped>
.layout_header {
  height: 100%;
  border-bottom: 2px solid #ccc;
}
</style>
