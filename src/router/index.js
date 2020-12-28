import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import page1 from '@/components/page1'
import page2 from '@/components/page2'
import About from '@/components/About'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TOP',
      component: page1
    },
    {
      path: '/page2',
      name: 'SEARCH',
      component: page2
    },
    {
      path: '/About',
      name: 'ABOUT',
      component: About
    },
    {
      path: '/Contact',
      name: 'CONNTACT',
      component: Contact
    }
  ]
})
