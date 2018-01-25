<template>
  <div id="index-page">
    <div class="page-content">
      <!-- <x-header :left-options={showBack:false} :title="'首页'"></x-header> -->
      <div class="login-tip">
        <span title="10秒钟定制职位">10秒钟定制职位</span>
        <a href="#">去登录</a>
      </div>
      <position-list :data-list="List"></position-list>
      <div v-if="List.length" class="laod-more-btn"><a href="javascript:;" @click="loadMore()" v-text="loadMoreText">加载更多</a></div>
    </div>
    <div class="footer">
      页面底部
    </div>
  </div>
</template>

<script>
import { XHeader , Group , Cell , XButton } from 'vux'
import PositionList from '../common/PositionList'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components:{
    XHeader,
    Group,
    Cell,
    XButton,
    PositionList
  },
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageNo: 1,
      List:[],
      loadMoreText:'加载更多'
    }
  },
  beforeCreate() {
    //do something before creating vue instance
    Api.getIndexPositionList(this.pageNo,20).then((res)=>{
      this.List = res.content.data.page.result
    })
  },
  methods: {
    ...mapMutations({updateLoading:'UPDATE_LOADING'}),
    //获取企业列表
    getList() {
      Api.getIndexPositionList(this.pageNo,20).then((res)=>{
        this.List = this.List.concat(res.content.data.page.result)
        this.updateLoading({isLoading: false})
      })
    },
    loadMore() {
      // this.store.vux.commit('updateLoadingStatus', {isLoading: true})
      this.updateLoading({isLoading: true})
      this.pageNo++
    }
  },
  watch:{
    pageNo:'getList'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index-page{
  min-height: 100%;
  /*margin-top: -46px;*/
  display: flex;
  flex-direction: column;
}
.page-content{
  flex: 1;
}
.footer{
  height: 60px;
  /*padding-bottom: 50px;*/
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
  background-color: #e8e5e5;
  border-radius: 8px;
  /*font-size: 13px;*/
  color: #00b38a;
}
.page-content{

}
.laod-more-btn{
  text-align: center;
  padding: 15px 0;
}
.laod-more-btn a{
  color: #666;
}
</style>
