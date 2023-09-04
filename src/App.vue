<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="root">
    <aside>
      <nav>
        <RouterLink to="/option">选项式API</RouterLink>
        <RouterLink to="/composition">组合式API</RouterLink>
        <RouterLink to="/life">生命周期</RouterLink>
        <RouterLink to="/study">学习</RouterLink>
        <RouterLink to="/jsx">jsx</RouterLink>
        <RouterLink to="/render">render函数</RouterLink>
      </nav>
    </aside>
    <main>
      <div>
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.root {
  display: flex;
}

aside {
  height: 100vh;
  width: 200px;
  box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

aside nav {
  margin-top: 20px;
  display: grid;
  text-align-last: center;
  grid-row-gap: 20px;
}

aside nav a {
  line-height: 40px;
}

aside nav a:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}


main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

}

main>div {
  width: 600px;
  min-height: 600px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
</style>
