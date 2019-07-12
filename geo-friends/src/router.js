import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Index from './views/Index.vue'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Check if route need auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next({ name: 'Signup' })
    }
  } else {
    next()
  }
})

export default router
