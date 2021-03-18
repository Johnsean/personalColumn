import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'
import register from '@/components/Register'
import edit from '@/components/Edit'
import personColumn from '@/components/personColumn'
import post from '@/components/Post'
import profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
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
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/edit',
      name: 'edit',
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
      component:  profile
    }
  ]
})
