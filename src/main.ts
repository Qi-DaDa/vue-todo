import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import btnPlugin from "@/plugins/btnPlugin";
import CustomButton from "@/components/CustomButton/index.vue";
import './assets/main.css'
// 创建实例
const app = createApp(App, { a: 1 })
console.log('vue实例=>', app)
// 引进element UI
app.use(ElementPlus)
// 状态管理
app.use(createPinia())
// 路由
app.use(router)
// 引入自定义插件
app.use(btnPlugin, { name: 'vue自定义插件' })
// 全局挂载组件
app.component("GlobalComponent", CustomButton)
// 全局自定义自定义指令
app.directive('red', {
  mounted(el, b, c, d) {
    el.style = "color:red"
  }
})
// 挂载
app.mount('#app')
// 处理错误
app.config.errorHandler = (err) => {
  console.log('处理错误==>', err)
}
app.config.globalProperties.message = '全局数据'


// 
/**
 * vue.use() 用于引入插件plugn
 * 整体扩展：extend
 * 插件扩展：plugin 
 * 动态组价：<compponent is:'组件名'/>
 * 异步组价：defineAsyncComponent(()=>import('../../'))
 * 自定义指令 v-*   
 */
