import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.glob('./module/*.js', { eager: true })

const routes = Object.keys(modules).reduce((routes, modulePath) => {
  const moduleRoutes = modules[modulePath].default || []
  return [...routes, ...moduleRoutes]
}, [])

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    // {
    //   path: '/404',
    //   meta: { auth: false },
    //   component: () => import('@/views/error/404.vue'),
    // },
    // { path: '/:pathMatch(.*)*', redirect: '/404' },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/') {
    console.log(true)
    next({ path: '/login' })
  }
  next()
})

export default router
