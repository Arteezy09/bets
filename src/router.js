import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'
import Football from './views/Football.vue'
import Hockey from './views/Hockey.vue'
import Tennis from './views/Tennis.vue'
import Cybersport from './views/Cybersport.vue'
import Basketball from './views/Basketball.vue'
import Volleyball from './views/Volleyball.vue'
import Boxing from './views/Boxing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },
    {
      path: '/football',
      name: 'football',
      component: Football
    },
    {
      path: '/hockey',
      name: 'hockey',
      component: Hockey
    },
    {
      path: '/tennis',
      name: 'tennis',
      component: Tennis
    },
    {
      path: '/cybersport',
      name: 'cybersport',
      component: Cybersport
    },
    {
      path: '/basketball',
      name: 'basketball',
      component: Basketball
    },
    {
      path: '/volleyball',
      name: 'volleyball',
      component: Volleyball
    },
    {
      path: '/boxing',
      name: 'boxing',
      component: Boxing
    }
  ]
})
