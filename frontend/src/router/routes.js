import MainLayout from 'layouts/MainLayout.vue'
import ThankYouLayout from 'layouts/ThankYouLayout.vue'

const routes = [
  {
    path: '/input/:id/:binId',
    name: 'home',
    component: MainLayout,
    props: true
  },
  {
    path: '/thankyou/:amount',
    name: 'thankyou',
    component: ThankYouLayout,
    props: true
  },
  //redirect
  {
    path: '/',
    redirect: './input/8500/1'
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
