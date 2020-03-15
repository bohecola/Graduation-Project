<template>
  <!-- 轮播图 -->
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" width="100%" height="160px"/>
    </van-swipe-item>
  </van-swipe>  
</template>

<script>
  import Vue from 'vue';
  // 导入轮播组件
  import { Swipe, SwipeItem } from 'vant'
  // 导入图片组件
  import { Image } from 'vant'
  // 导入图片懒加载组件
  import { Lazyload } from 'vant'

  Vue.use(Swipe).use(SwipeItem).use(Image).use(Lazyload)

  export default {
    name: 'HomeSwiper',
    data() {
      return{
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-1.jpg'
        ]
      }
    }
  }
</script>

<style scoped>

</style>