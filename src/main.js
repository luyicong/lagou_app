import Vue from 'vue'

import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'

import router from './router'

import store from './store'

FastClick.attach(document.body)

import { BusPlugin } from 'vux'

Vue.use(BusPlugin)

Vue.config.productionTip = false

import {
    // DatetimePlugin,
    // CloseDialogsPlugin,
    ConfigPlugin,
    // Bus,
  //   LocalePlugin,
  //   DevicePlugin,
  //   ToastPlugin,
  //  AlertPlugin,
  //  ConfirmPlugin,
  //  LoadingPlugin,
  //  WechatPlugin,
  //  AjaxPlugin,
  //  AppPlugin
 } from 'vux'

// Vue.use(Bus)

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// plugins
// Vue.use(DevicePlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)
// Vue.use(ConfirmPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)
// Vue.use(BusPlugin)
// Vue.use(DatetimePlugin)

router.beforeEach(function (to, from, next) {
  store.commit('UPDATE_LOADING', {isLoading: true})
  setTimeout(()=>{
    next()
  },300)
})

router.afterEach(function (to) {
  store.commit('UPDATE_LOADING', {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
