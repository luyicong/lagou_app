<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <x-header style="position:absolute;top:0;left:0;width:100%;" :left-options={showBack:false} :title="'拉勾网'"></x-header>
    <router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
    <tabbar style="position:fixed;">
      <tabbar-item selected link="/">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
        <span slot="label">职位</span>
      </tabbar-item>
      <tabbar-item show-dot link="/search">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
        <span slot="label">搜索</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Loading , XHeader , Tabbar, TabbarItem } from 'vux'

import { mapState } from 'vuex'
export default {
  components:{ Loading , XHeader , Tabbar, TabbarItem },
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    })
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
  background-color: #fbf9fe;
  height:100%;
  color: #333;
}
#app{
  height:100%;
  padding-top:46px;
  box-sizing:border-box;
}
#app .vux-header{
  background-color: #00b38a;
}
#app .weui-bar__item_on .weui-tabbar__label{
  color:#00b38a;
}
</style>
