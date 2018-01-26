<template>
  <div class="position-list-wrap" v-if="DataList.length">
    <ul class="position-list">
      <!-- <li class="list-item" v-for="item in DataList" link="/detail"> -->
        <router-link class="list-item" tag="li" :key="item.positionId" v-for="item in DataList" :to="{ path: 'detail', params: { id: 123 }}">
        <div class="img-item">
          <img width="60" height="60" :src="`https://static.lagou.com/${item.companyLogo}`" alt="">
        </div>
        <div class="item-desc">
          <h4 class="item-title">{{item.companyName}}</h4>
          <p class="item-info">
            <span>{{item.positionName}}</span>
            <span>{{item.salary}}</span>
          </p>
          <p class="update-time">{{item.createTime}}</p>
        </div>
      <!-- </li> -->
      </router-link>
    </ul>
  </div>

</template>
<script>
import { mapGetters , mapMutations } from 'vuex'

export default {
  props: {
    DataList:{
      type:Array,
      default:[]
    }
  },
  name: "",
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.position-list{
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.position-list .list-item{
  width: 100%;
  height: auto;
  padding:12px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  display: -webkit-box;
  -webkit-box-align:center;
  box-sizing: border-box;
}
.position-list .img-item{
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.position-list .item-desc{
  height: 62px;
  -moz-box-flex:1;
  -webkit-box-flex:1;
  box-flex:1;
}
.position-list .item-desc .item-title{
  font-size: 16px;
}
.position-list .item-info{
  width: 100%;
  float: left;
  display: block;
}
.position-list .item-desc p{
    font-size: 15px;
}
/* .position-list .item-info span{
  font-size: 14px;
} */
.position-list .item-info span:first-child{
  float: left;
}
.position-list .item-info span:last-child{
  float: right;
  color: #00b38a;
  font-weight: 600;
}
.position-list .update-time{
  float: left;
  font-size: 12px;
  color: #999;
}
</style>
