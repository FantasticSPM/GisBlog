import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = window.globalConfig.menuOptions.map(i=>{
  let route = {
    path: i.path,
    name: i.component,
    component: () => import(`@/views/HomeView/${i.component}/${i.component}.vue`)
  }
  if(i.component === "ArticleView"){
    route.children = [{
      path:'detail',
      name:'detail',
      component: () => import('@/views/HomeView/ArticleView/ArticleDetail.vue')
    }]
  }
  return route
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue'),
    children: routes
  }
  ,{
    path: '/:pathMatch(.*)*', // 匹配所有未定义的路由
    name: 'notFound',
    component: () => import('@/views/404View/404View.vue'),
    hidden: true
  }
]
})

router.beforeEach((to, from) => {
  NProgress.start();
  return
})

router.afterEach((to, from) => {
  NProgress.done();
  return
})
export default router
