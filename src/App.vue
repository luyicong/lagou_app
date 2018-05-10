<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <view-box>
      <x-header style="position:absolute;top:0;left:0;width:100%;z-index:999" :left-options={showBack:false} :title="'拉勾网'"></x-header>
      <!-- <transition name="slide"> -->
          <router-view></router-view>
      <!-- </transition> -->
      <!-- <router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view> -->
      <tabbar style="position:fixed;">
        <tabbar-item :selected="$route.path === '/'" link="/">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
          <span slot="label">职位</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path === '/search'" link="/search">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
          <span slot="label">搜索</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path === '/user'" link="/user">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Loading , XHeader , ViewBox , Tabbar, TabbarItem} from 'vux'
import { mapState } from 'vuex'
export default {
  components:{ Loading , XHeader , ViewBox , Tabbar, TabbarItem },
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body{
  font-family: Helvetica;
  // font-size: 62.5%;
}
html{
  height:100%;
}
body {
  background-color: #fff;
  height:100%;
  color: #333;
}
#app{
  height:100%;
  /*padding-top:46px;*/
  box-sizing:border-box;
}
</style>
