<template>
  <!-- Tab标签页组件 -->
  <van-tabs v-model="active" swipeable animated sticky color="#1989fa" :offset-top="54">
      <van-tab title="推荐">
        <slot name="recommend"></slot>
      </van-tab>
      <van-tab title="我看过的">
        <slot name="visited"></slot>
      </van-tab>
  </van-tabs>
</template>

<script>
  import Vue from 'vue';
  // 导入Tab标签页组件
  import { Tab, Tabs } from 'vant';
  // 导入 Sticky 粘性布局组件
  import { Sticky } from 'vant';

  Vue.use(Tab).use(Tabs)
  Vue.use(Sticky)

  export default {
    name: 'HomeTabControl',
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style>
  /* 由于van-tabs 和 van-tab本组件的子组件且高度封装 所以取消本组件的scoped 用于重新订制子组件中的样式 */
  /* .van-tabs__line {
    background-color: #ee0a24;
    z-index: 0;
  } */
</style>