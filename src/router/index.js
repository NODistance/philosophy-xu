import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import numDetails from '@/pages/numDetails'
import record from '@/pages/record'
import cards from '@/pages/cards'
import answer from '@/pages/answer'
import exchange from '@/pages/exchange'
import shara from  '@/pages/shara'
import sharaConfirm from '@/pages/sharaConfirm'

import Register from '@/pages/Register'
import Perfect from '@/pages/Perfect'
import Information from '@/pages/Information'
import Account from '@/pages/Account'


Vue.use(Router)

export default new Router({
  routes: [
      {path: '/', name: 'index', component: index},
      {path: '/numDetails', name: 'numDetails', component: numDetails},
      {path: '/record', name: 'record', component: record},
      {path: '/cards', name: 'cards', component: cards},
      {path: '/answer', name: 'answer', component: answer},
      {path: '/exchange', name: 'exchange', component: exchange},
      {path: '/shara', name: 'shara', component: shara},
      {path: '/sharaConfirm', name: 'sharaConfirm', component: sharaConfirm},


      {path: '/Register', name: 'Register', component: Register},
      {path: '/Perfect', name: 'Perfect', component: Perfect},
      {path: '/Information', name: 'Information', component: Information},
      {path: '/Account', name: 'Account', component: Account}
  ]
})
