import { createRouter, createWebHistory } from 'vue-router'
import OptionsAPI from "@/views/OptionsAPI/index.vue";
import CompositionAPI from "@/views/CompositionAPI/index.vue";
import LifeCycle from "@/views/LifeCycle/index.vue";
import Study from "@/views/Study/index.vue";
import Jsx from "@/views/Jsx";
import RenderFn from "@/views/RenderFn/index.vue";
import CustomPlugin from "@/views/CustomPlugin/index.vue";
import SlotPage from "@/views/slotPage/index.vue";
import OtherPage from "@/views/otherPage/index.vue";
import DemoPage from "@/views/demoPage/index.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/option',
      name: '选项式',
      component: OptionsAPI
    },
    {
      path: '/composition',
      name: '组合式',
      component: CompositionAPI
    },
    {
      path: '/life',
      name: '生命周期',
      component: LifeCycle
    },
    {
      path: '/study',
      name: '学习',
      component: Study
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: Jsx
    },
    {
      path: '/render',
      name: 'render函数',
      component: RenderFn
    },
    {
      path: '/customPlugin',
      name: '自定义插件展示',
      component: CustomPlugin
    },
    {
      path: '/slot',
      name: '插槽',
      component: SlotPage
    },
    {
      path: '/other',
      name: '其他',
      component: OtherPage
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoPage
    }
  ]
})

export default router
