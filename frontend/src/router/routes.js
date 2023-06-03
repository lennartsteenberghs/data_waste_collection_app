import HomePage from 'src/pages/HomePage.vue'
import ThankYouPage from 'src/pages/ThankYouPage.vue'

const routes = [
  {
    path: '/home/:binId/:binType',
    name: 'home',
    component: HomePage,
    props: true
  },
  {
    path: '/thankyou/:amount',
    name: 'thankyou',
    component: ThankYouPage,
    props: true
  },
  //redirect
  {
    path: '/',
    redirect: './home/8500/1'
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404Page.vue')
  }
]

export default routes
