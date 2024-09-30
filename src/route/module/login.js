import Login from '@/layout/login/index.vue'

const loginRouter = [
  {
    path: '/',
    component: Login,
    children: [
      {
        path: 'login',
        component: () => import('@/views/pages/user/login.vue'),
      },
      {
        path: 'join',
        component: () => import('@/views/pages/user/signup.vue'),
      },
    ],
  },
]
export default loginRouter
