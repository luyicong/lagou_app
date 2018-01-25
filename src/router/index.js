import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Search from '@/components/pages/Search'
import User from '@/components/pages/User'
import Detail from '@/components/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: (resolve)=>{
        require(['@/components/pages/Search'], resolve)
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: (resolve)=>{
        require(['@/components/pages/Detail'], resolve)
      }
    },
    {
      path: '/user',
      name: 'User',
      component: (resolve)=>{
        require(['@/components/pages/User'], resolve)
      }
    }
  ]
})
