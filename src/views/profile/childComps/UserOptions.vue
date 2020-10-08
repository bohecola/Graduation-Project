<template>
<div class="user-options">
  <van-cell-group title=" ">
    <van-cell title="帮助信息" is-link to="/profile/feedback" icon="service-o" />
    <van-cell title="联系我们" is-link to="/profile/contact_us" icon="phone-o" />
    <van-cell title="分享" is-link icon="gift-o" @click="showPopup"/>
  </van-cell-group>

  <van-cell-group title=" ">
    <van-cell title="设置" is-link to="/profile/setting" icon="setting-o" />
    <van-popup
      v-model="show"
      round
      closeable
      position="bottom"
      :style="{ height: '20%' }"
    >
      <img src="~assets/img/share.png" alt="">
    </van-popup>
  </van-cell-group>
</div>
</template>

<script>
  import Vue from 'vue'
  //导入 Cell CellGroup 组件
  import { Cell, CellGroup, Button } from 'vant'
  //导入 Popup 组件
  import { Popup, Image } from 'vant'

  Vue.use(Cell).use(CellGroup)
  Vue.use(Popup).use(Button).use(Image)

  export default {
    name: 'UserOptions',
    data() {
      return {
        show: false
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    }
  }
</script>

<style scoped>
  .van-popup--bottom {
    text-align: center;
    padding-top: 40px;
  }

  .van-popup--bottom img{
   width: 90px;
   height: 90px;
  }
</style>