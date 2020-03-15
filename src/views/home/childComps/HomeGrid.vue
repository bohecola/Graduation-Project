<template>
  <!-- 导航宫格 Grid -->
  <van-grid :column-num="3">
    <van-grid-item
      v-for="value in 3"
      :key="value"
      icon="photo-o"
      text="文字"
    />
  </van-grid>  
</template>

<script>
  import Vue from 'vue';
  // 导入宫格组件
  import { Grid, GridItem} from 'vant';

  Vue.use(Grid).use(GridItem)

  export default {
    name: 'HomeGrid'
  }
</script>

<style scoped>

</style>