<template>
<div class="user-options">
  <van-cell-group title=" ">
    <van-cell title="反馈与帮助" is-link to="/profile/feedback" icon="service-o" />
    <van-cell title="联系我们" is-link to="/profile/contact_us" icon="phone-o" />
    <van-cell title="分享" is-link icon="share" @click="showPopup"/>
  </van-cell-group>

  <van-cell-group title=" ">
    <van-cell title="设置" is-link to="/profile/setting" icon="setting-o" />
    <van-popup
      v-model="show"
      round
      closeable
      position="bottom"
      :style="{ height: '20%' }"
    />
  </van-cell-group>
</div>
</template>

<script>
  import Vue from 'vue'
  //导入 Cell CellGroup 组件
  import { Cell, CellGroup, Button } from 'vant'
  //导入 Popup 组件
  import { Popup } from 'vant'

  Vue.use(Cell).use(CellGroup)
  Vue.use(Popup).use(Button)

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

</style>