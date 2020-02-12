import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clock.vue')
  },
  {
    path: '/clock-2',
    name: 'clockV2',
    component: () => import(/* webpackChunkName: "about" */ '../views/clockV2/index.vue')
  },
  {path: '/clock-v3',
  name: 'clock-v3',
  component: () => import('../views/clock-v3/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
