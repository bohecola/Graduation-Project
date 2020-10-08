<template>
  <!-- 轮播图 -->
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" width="100%" height="180px"/>
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
          'http://localhost/uploads/images/avatars/202005/13/8_1589355278_LF7lc1xEEu.jpg',
          'http://localhost/uploads/images/avatars/202005/13/8_1589356163_fXZR3lfAjf.jpg',
          'http://localhost/uploads/images/avatars/202005/13/8_1589356537_5HrN0rBW1F.jpg',
          'http://localhost/uploads/images/avatars/202005/13/8_1589356910_RA1nqDY4pY.jpg'
        ]
      }
    }
  }
</script>

<style scoped>

</style>