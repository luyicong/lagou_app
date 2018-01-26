<template>
    <div id="position-detail">
      <x-header
        style="position:absolute;top:0;left:0;width:100%;"
        :left-options={showBack:true}
        :title="'职位详情'">
      </x-header>
      <div class="detail-content">
        职位详情
      </div>
    </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  name: "",
  data: () => ({

  })
}
</script>
<style scoped>
#position-detail .vux-header .vux-header-left{
  color: #fff;
}
/* #position-detail .vux-header-left .left-arrow:before{
  border-color: #fff;
} */
.detail-content{
  margin-top: 46px;
}
.slide-enter-active, .slide-leave-active{
    transition: all 0.3s
}

.slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
}
</style>
