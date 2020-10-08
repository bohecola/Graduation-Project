<template>
  <!-- 导航宫格 Grid -->
  <van-grid :column-num="3">
    <van-grid-item> 
      <!-- <p class="grid-title"></p> -->
      <van-icon name="diamond-o" size="1.6rem" color="#1989fa" />
      <p class="grid-desc">榜单</p>
    </van-grid-item>

    <van-grid-item @click="onPerson">
      <!-- <p class="grid-title"></p> -->
      <van-icon name="orders-o" size="1.6rem" color="#1989fa" />
      <p class="grid-desc">人物库</p>
    </van-grid-item>
  
    <van-grid-item icon="clock-o" @click="onCompany">
      <!-- <p class="grid-title"></p> -->
      <van-icon name="points" size="1.6rem" color="#1989fa" />
      <p class="grid-desc">公司库</p>
    </van-grid-item>
  </van-grid>
</template>

<script>
  import Vue from 'vue';
  // 导入宫格组件
  import { Grid, GridItem, Icon} from 'vant';

  Vue.use(Grid).use(GridItem).use(Icon)

  export default {
    name: 'HomeGrid',
    methods: {
      onPerson() {
        this.$router.push('/person')
      },
      onCompany() {
        this.$router.push('/search');
      }
    }
  }
</script>

<style scoped>
  .grid-title {
    margin: 12px 0;
    font-size: 15px;
  }

  .grid-desc {
    margin-top: 10px;
    font-size: 12px;
    color: #999;
  }
</style>