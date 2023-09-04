import { createRouter, createWebHistory } from 'vue-router'
import OptionsAPI from "@/views/OptionsAPI/index.vue";
import CompositionAPI from "@/views/CompositionAPI/index.vue";
import LifeCycle from "@/views/LifeCycle/index.vue";
import Study from "@/views/Study/index.vue";
import Jsx from "@/views/Jsx";
import RenderFn from "@/views/RenderFn/index.vue";

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
  ]
})

export default router
