import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
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
// 挂载
app.mount('#app')
// 处理错误
app.config.errorHandler = (err) => {
  console.log('处理错误==>', err)
}
app.config.globalProperties.message = '全局数据'
