<template>
  <div id="index-page">
    <div class="page-content">
      搜索页面
    </div>
    <div class="footer">
      页面底部
    </div>
  </div>
</template>

<script>
import { XHeader , Group , Cell , XButton } from 'vux'
export default {
  components:{
    XHeader,
    Group,
    Cell,
    XButton
  },
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index-page{
  /*min-height: 100%;*/
  /*display: flex;
  flex-direction: column;*/
}
/*.page-content{
  flex: 1;
}*/
.footer{
  height: 60px;
  padding-bottom: 50px;
  /*background: #ddd;*/
  text-align: center;
  line-height: 60px;
}
#index-page .vux-header{
  background-color: #00b38a;
}
.login-tip{
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #ddd;
  line-height: 42px;
}
.login-tip span{
  color: #666;
  float: left;
  text-indent: 12px;
}
.login-tip a{
  display: block;
  float: right;
  /*width: 60px;*/
  margin:6px 12px;
  padding:0 15px;
  height: 30px;
  line-height: 30px;
  background-color: #f5f5f5;
  border-radius: 8px;
  /*font-size: 13px;*/
  color: #00b38a;
}
.page-content{

}
</style>
