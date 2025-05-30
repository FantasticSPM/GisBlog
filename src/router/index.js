import { createRouter, createWebHistory } from 'vue-router'

const routes = window.globalConfig.menuOptions.map(i=>{
  let route = {
    path: i.path,
    name: i.component,
    component: () => import(`@/views/HomeView/${i.component}/${i.component}.vue`)
  }
  if(i.component === "ExampleView"){
    route.path = 'example/:exampleId?'
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
  }]
})

export default router
