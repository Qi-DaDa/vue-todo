<!-- 列表 -->
<script lang="ts">
export default {
  props: {
    tableList: {
      type: Array<{ key: number, title: string }>,
      default: [],
    }
  }

}
</script>
<template>
  <div class="custom_list">
    <TransitionGroup name="aaa">
      <div v-for="(item, index) in tableList" :key="item.key">
        <div>{{ index + 1 }}</div>
        <div>{{ item.title }}</div>
        <div @click="$emit('delete', { key: item.key })">X</div>
      </div>

    </TransitionGroup>
  </div>
</template>
<style scoped>
.custom_list {
  margin: 0px 20px;
}

.custom_list>div {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30px 1fr 30px;
  width: 100%;
  background-color: #fff;
}

.custom_list>div>div:first-child,
.custom_list>div>div:last-child {
  font-weight: bold;
  text-align: center;
}

.custom_list>div>div:nth-child(2) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom_list>div>div:last-child {
  cursor: pointer;
}

.custom_list>div>div:last-child:hover {
  color: red;
}


.aaa-move,
.aaa-enter-active,
.aaa-leave-active {
  transition: all 0.5s ease;
}

.aaa-enter-from,
.aaa-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.aaa-leave-active {
  position: absolute;
}
</style>