<script>
import LayoutAside from "../LayoutAside/index.vue";
import LayoutHeader from "../LayoutHeader/index.vue";
import { RouterView } from 'vue-router'
export default {
  name: 'LayoutContainer',
  components: { LayoutAside, LayoutHeader, RouterView },
  props: [],
  emits: [],
  expose: [],
  inject: [],
  provide: {},
  data() {
    return ({
      title: 'layout_container'
    })
  },
  beforeCreate() {
    console.log('beforeCreate=>', this, this.title);
  },
  created() {
    console.log('created=>', this, this.title);
  },
  beforeMount() {
    console.log('beforeMount=>', this, this.title);
  },
  mounted() {
    console.log('mounted=>', this, this.title);
    console.log('LayoutAside==>', LayoutAside.name);
  },
  beforeUpdate() {
    console.log('beforeUpdate=>', this);
  },
  updated() {
    console.log('updated=>', this);
  },
  beforeUnmount() {
    console.log('beforeUnmount=>', this);
  },
  unmounted() {
    console.log('unmounted=>', this);
  },
  watch: {},
  computed: {},
  methods: {},
}
</script>
<template>
  <div class="layout_container">
    <el-container style="height: 100%;">
      <el-header style="--dd-header-padding: 0">
        <LayoutHeader />
      </el-header>
      <el-container>
        <el-aside width="auto">
          <LayoutAside />
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.layout_container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>

