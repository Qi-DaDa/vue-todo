<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import CustomTabs from "./component/CustomTabs.vue";
import SetupFunction from "./SetupFunction/index.vue";
import SetupAttribute from "./SetupAttribute/index.vue";
const tabList = [
  { id: 1, title: 'setup' },
  { id: 2, title: 'setup()' }
]
const tabActive: Ref<number> = ref(1)
</script>

<template>
  <CustomTabs @onChage="(e) => tabActive = e.active" :active="tabActive" :tableList="tabList" />
  <KeepAlive>
    <component :is="tabActive == 1 ? SetupAttribute : SetupFunction" />
  </KeepAlive>
</template>

<style scoped></style>
