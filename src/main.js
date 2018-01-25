// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'

import router from './router'

import store from './store'

FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  setTimeout(()=>{
    next()
  },300)
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
