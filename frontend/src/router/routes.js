import MainLayout from 'layouts/MainLayout.vue'
import ThankYouLayout from 'layouts/ThankYouLayout.vue'
import MenuLayout from 'layouts/MenuLayout.vue'

const routes = [
  {
    path: '/input/:id/:binId',
    name: 'list',
    component: MainLayout,
    props: true
  },
  {
    path: '/home/:id/:binId',
    name: 'home',
    component: MenuLayout,
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
    redirect: './home/8500/1'
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
