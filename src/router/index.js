import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import AddRecipePage from '../components/AddRecipePage.vue'
import EditRecipePage from '../components/EditRecipePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addrecipepage',
    name: 'AddRecipePage',
    component: AddRecipePage
  },
  {
    path: '/editrecipepage',
    name: 'EditRecipePage',
    component: EditRecipePage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
