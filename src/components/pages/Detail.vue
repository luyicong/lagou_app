<template>
  <div id="position-detail">
    <x-header
      style="position:absolute;top:0;left:0;width:100%;"
      :left-options={showBack:true}
      :title="'职位详情'">
    </x-header>
    <div class="detail=content">
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
</style>
