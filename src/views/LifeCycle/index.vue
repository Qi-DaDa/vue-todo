<script lang="ts">
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
  data() { return { num: 0 } },
  errorCaptured(a, b) {
    console.log('errorCaptured===>', a, b);
  },
  methods: {
    onChangeNum() {
      this.num = this.num + 1
    }
  }
}
</script>
<template>
  <div class="container">
    <button @click="onChangeNum" class="btn">父组件点击{{ num }}</button>
  </div>
  <ChildComponent :nums="num" />
</template>
<style scoped>
.container {
  padding: 15px;
}

.btn {
  padding: 10px 30px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: pointer;
}
</style>