import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'
import register from '@/components/Register'
import edit from '@/components/Edit'
import personColumn from '@/components/personColumn'
import post from '@/components/Post'
import profile from '@/components/Profile'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        redirectAlreadyLogin: true
      },
      component: login
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        redirectAlreadyLogin: true
      },
      component: register
    },
    {
      path: '/edit',
      name: 'edit',
      meta: {
        requiredLogin: true
      },
      component: edit
    },{
      path: '/column/:id',
      name: 'column',
      component: personColumn
    }, {
      path: '/post/:id',
      name: 'post',
      component: post
    }, {
      path: '/profile',
      name: 'profile',
      meta: {
        requiredLogin: true
      },
      component:  profile
    }
  ]
})
router.beforeEach((to, from, next) => {
  const {isLogin} = store.state
  const {requiredLogin,redirectAlreadyLogin} = to.meta
  if (!isLogin) {
    if (requiredLogin) {
      next('/login')
    } else {
      next()
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})
export default router
