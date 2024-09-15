import { createRouter, createWebHistory } from 'vue-router';

const modules = import.meta.glob('./module/*.js', { eager: true });

console.log('Imported Modules:', modules);
console.log(Object.keys(modules))

const routes = Object.keys(modules).reduce((routes, modulePath) => {
  console.log(`Module path: ${modulePath}`, modules[modulePath]); // 모듈 로그 확인
  const moduleRoutes = modules[modulePath].default || [];
  console.log(`Routes from ${modulePath}:`, moduleRoutes); // 라우트 배열 로그 확인
  return [...routes, ...moduleRoutes];
}, []);

console.log('Final Routes:', routes);

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
});

router.beforeEach(async (to, from, next) => {
  if (to.path === '/') {
    next({ path: '/home' })
  }
  next();
});

export default router;