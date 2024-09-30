// import Layout from "@/views/home";
const homeRouter = [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
]

export default homeRouter
