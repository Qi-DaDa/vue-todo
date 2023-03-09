<script  lang="ts">
import { ref, defineProps, onMounted } from "vue";
export default {
  props: {
    placeholder: {
      type: String,
      default: '填写啊'
    },
    defaultKeyword: {
      type: String,
      default: '',
    }
  },
  emits: {
    submit(params: { keyword: string }) {
      return true
    }
  },
  data() {
    return ({
      keyword: this.defaultKeyword,
    })
  },
  mounted() {
    this.$refs.inputDom.focus()
  },
  methods: {
    onSubmit() {
      this.$emit('submit', { keyword: this.keyword })
    }
  }

}
</script>
<template>
  <div class="custom_input">
    <input :placeholder="placeholder" type="text" v-model="keyword" ref="inputDom" @keydown.enter="onSubmit" />
    <button @click="onSubmit">确定</button>
  </div>
</template>
<style scoped>
.custom_input {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 100px;
}

.custom_input input {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  height: 40px;
  border-radius: 5px;
  padding: 0px 10px;
}

.custom_input button {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
</style>