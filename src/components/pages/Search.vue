<template>
  <div id="index-page">
    <div class="page-content">
      <div class="search-form-wrap">
        <div class="city-select" @click="showCityList()">
          <span>全国</span>
          <x-icon class="icon-arrow-down" type="ios-arrow-down" size="16"></x-icon>
        </div>
        <div class="search-input">
            <input type="text" name="" value="" placeholder="请输入职位或公司">
        </div>
        <div class="search-btn">
          <x-icon class="icon-search" type="ios-search" size="22"></x-icon>
        </div>
      </div>
      <div class="search-result-list">
        <position-list :data-list="List"></position-list>
      </div>
    </div>
    <div class="city-list" v-if="isShowCityList">
      <div class="city-list-header">
        <div class="back-btn" @click="showCityList()">
            <x-icon class="icon-arrow-left" type="ios-arrow-left" size="24" style="color:#fff;"></x-icon>
        </div>
        <span>拉勾网</span>
      </div>
      城市列表
    </div>
    <div class="footer">
      页面底部
    </div>
  </div>
</template>

<script>
import { XHeader , Group , Cell , XButton } from 'vux'
import PositionList from '../common/PositionList'
export default {
  components:{
    XHeader,
    PositionList
  },
  name: 'index',
  data () {
    return {
      isShowCityList:false,
      List:[
        {
        logger: {
        traceCapable: true,
        name: "com.lagou.entity.mobile.MobilePosition"
        },
        positionId: 3884279,
        positionName: "Java开发工程师",
        city: "上海",
        createTime: "今天 20:58",
        salary: "10k-17k",
        companyId: 184792,
        companyLogo: "i/image/M00/C0/FA/Cgp3O1jUeu2AJ24BAAAOA46l2xI680.jpg",
        companyName: "优品车",
        companyFullName: "优品汽车服务（上海）有限公司"
        },
        {
        logger: {
        traceCapable: true,
        name: "com.lagou.entity.mobile.MobilePosition"
        },
        positionId: 3909472,
        positionName: "招聘专员",
        city: "深圳",
        createTime: "今天 20:46",
        salary: "5k-6k",
        companyId: 32979,
        companyLogo: "image1/M00/00/4C/Cgo8PFTUXPiABrJjAABqq60qElQ756.jpg",
        companyName: "小源科技",
        companyFullName: "珠海市小源科技有限公司"
        },
        {
        logger: {
        traceCapable: true,
        name: "com.lagou.entity.mobile.MobilePosition"
        },
        positionId: 3884993,
        positionName: "公关策划经理（北京）",
        city: "北京",
        createTime: "今天 20:46",
        salary: "8k-16k",
        companyId: 32979,
        companyLogo: "image1/M00/00/4C/Cgo8PFTUXPiABrJjAABqq60qElQ756.jpg",
        companyName: "小源科技",
        companyFullName: "珠海市小源科技有限公司"
        },
        {
        logger: {
        traceCapable: true,
        name: "com.lagou.entity.mobile.MobilePosition"
        },
        positionId: 3885440,
        positionName: "行政专员",
        city: "厦门",
        createTime: "今天 20:32",
        salary: "3k-4k",
        companyId: 25836,
        companyLogo: "i/image/M00/66/35/Cgp3O1gJpXaAJlc_AAB26ClZM9c471.jpg",
        companyName: "暴走漫画",
        companyFullName: "西安摩摩信息技术有限公司"
      },
      {
      logger: {
      traceCapable: true,
      name: "com.lagou.entity.mobile.MobilePosition"
      },
      positionId: 3884279,
      positionName: "Java开发工程师",
      city: "上海",
      createTime: "今天 20:58",
      salary: "10k-17k",
      companyId: 184792,
      companyLogo: "i/image/M00/C0/FA/Cgp3O1jUeu2AJ24BAAAOA46l2xI680.jpg",
      companyName: "优品车",
      companyFullName: "优品汽车服务（上海）有限公司"
      },
      {
      logger: {
      traceCapable: true,
      name: "com.lagou.entity.mobile.MobilePosition"
      },
      positionId: 3909472,
      positionName: "招聘专员",
      city: "深圳",
      createTime: "今天 20:46",
      salary: "5k-6k",
      companyId: 32979,
      companyLogo: "image1/M00/00/4C/Cgo8PFTUXPiABrJjAABqq60qElQ756.jpg",
      companyName: "小源科技",
      companyFullName: "珠海市小源科技有限公司"
      },
      {
      logger: {
      traceCapable: true,
      name: "com.lagou.entity.mobile.MobilePosition"
      },
      positionId: 3884993,
      positionName: "公关策划经理（北京）",
      city: "北京",
      createTime: "今天 20:46",
      salary: "8k-16k",
      companyId: 32979,
      companyLogo: "image1/M00/00/4C/Cgo8PFTUXPiABrJjAABqq60qElQ756.jpg",
      companyName: "小源科技",
      companyFullName: "珠海市小源科技有限公司"
      },
      {
      logger: {
      traceCapable: true,
      name: "com.lagou.entity.mobile.MobilePosition"
      },
      positionId: 3885440,
      positionName: "行政专员",
      city: "厦门",
      createTime: "今天 20:32",
      salary: "3k-4k",
      companyId: 25836,
      companyLogo: "i/image/M00/66/35/Cgp3O1gJpXaAJlc_AAB26ClZM9c471.jpg",
      companyName: "暴走漫画",
      companyFullName: "西安摩摩信息技术有限公司"
      }
      ]
    }
  },
  methods: {
    showCityList() {
        this.isShowCityList = !this.isShowCityList
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
.page-content{
  flex: 1;
  min-width: 100%;
  padding-top: 46px;
  box-sizing: border-box;
}
.search-form-wrap{
  display: flex;
  border-bottom: 1px solid #e8e8e8;
}
.page-content .city-select{
  width: 94px;
  height: 44px;
  border-right: 1px solid #e8e8e8;
  position: relative;
}
.city-select .icon-arrow-down{
  position: absolute;
  right: 6px;
  top: 15px;
  color: #ddd;
}
.city-select span{
  display: block;
  float: left;
  text-align: center;
  line-height: 44px;
  width: 72px;
  font-size: 14px;
  letter-spacing: 0.1em;
}
.page-content .search-input{
  flex: 1;
  padding-left: 6px;
}
.search-input input{
  width: 100%;
  outline: none;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  margin-top: 11px;
  border: none;
}
.page-content .search-btn{
  width: 60px;
}
.page-content  .icon-search{
  margin-top: 11px;
  margin-left: 19px;
  color: #ddd;
}
.search-result-list{
  margin-top: -1px;
}
.city-list{
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 45px;
    background-color: #fff;
    z-index: 1500;
}
.city-list .city-list-header{
  width: 100%;
  height: 46px;
  background-color: #00b38a;
  text-align: center;
  line-height: 46px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  position: relative;
}
.city-list-header .back-btn{
  width: 60px;
  height: 100%;
  position: absolute;
  left:0;
  top: 0;
}
.city-list-header .icon-arrow-left{
  position: absolute;
  top: 12px;
  left:10px;
  fill:#fff;
}
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
</style>
