import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const page1 = () => {
//   return import('../views/Page1.vue')
// }

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/webPage1',
    name: 'webPage1',
    component: () => import(/* webpackChunkName: "about" */ '../views/WebPage1.vue')
  },
  {
    path: '/webPage2',
    name: 'webPage2',
    component: () => import(/* webpackChunkName: "about" */ '../views/WebPage2.vue')
  },
  {
    path: '/webPage3',
    name: 'webPage3',
    component: () => import(/* webpackChunkName: "about" */ '../views/WebPage3.vue')
  },




]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
