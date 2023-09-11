<script setup>
import { defineAsyncComponent } from 'vue'
import CustomError from "@/components/CustomError/index.vue";
import CustomLoading from "@/components/CustomLoading/index.vue";
const CustomButton = defineAsyncComponent({
  // 加载函数
  loader: () => import("@/components/CustomButton/index.vue"),
  // 加载异步组件时使用的组件
  loadingComponent: CustomLoading,
  // 加载失败后展示的组件
  errorComponent: CustomError,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 20000,
})

</script>
<template>
  <div class='other_page'>

    <div>
      <BtnPlugin type="success">
        <span>自定义插件按钮</span>
      </BtnPlugin>
    </div>
    <div>
      <CustomButton>
        <span>异步加载组件按钮</span>
      </CustomButton>
      <CustomLoading />
      <CustomError />
    </div>
  </div>
</template>
<style scoped  lang='scss'>
.other_page {
  div {
    padding: 20px;
    border-bottom: 1px solid red;
  }
}
</style>