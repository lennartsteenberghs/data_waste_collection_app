import ListLayout from 'src/layouts/ListLayout.vue'
import ThankYouLayout from 'layouts/ThankYouLayout.vue'

const routes = [
  {
    path: '/home/:binId/:binType',
    name: 'list',
    component: ListLayout,
    props: true
  },
  // {
  //   path: '/menu/:binId/:binType',
  //   name: 'home',
  //   component: MenuLayout,
  //   props: true
  // },
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
