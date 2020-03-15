<template>
  <!-- 通知栏 -->
  <van-notice-bar mode="link" @click="noticeClick">
    足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
  </van-notice-bar>
</template>

<script>
  import Vue from 'vue';
  // 导入通知组件
  import { NoticeBar } from 'vant';

  Vue.use(NoticeBar)

  export default {
    name: 'NoticeBar',
    methods: {
      noticeClick() {
        console.log('123')
      },
    }
  }
  </script>

<style scoped>

</style>