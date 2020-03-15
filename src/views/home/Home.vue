<template>
  <div id="home">
    <!-- 导航栏 -->
    <home-nav-bar/>
    <!-- 通知栏 -->
    <notice-bar/>
    <!-- 轮播图 -->
    <home-swiper/>
    <!-- 导航宫格 Grid -->
    <home-grid/>
    <!-- Tab标签页组件 -->
    <home-tab-control>
      <recommend slot="recommend" class="list-wrapper"/>
      <visited slot="visited" class="list-wrapper"/>
    </home-tab-control>
  </div>
</template>

<script>
import Vue from 'vue';
import HomeNavBar from './childComps/HomeNavBar'
import NoticeBar from './childComps/NoticeBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeGrid from './childComps/HomeGrid'
import HomeTabControl from './childComps/HomeTabControl'
import Recommend from './childComps/Recommend' 
import Visited from './childComps/Visited'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    NoticeBar,
    HomeSwiper,
    HomeGrid,
    HomeTabControl,
    Recommend,
    Visited
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
    padding-top: 54px;
  }

  .list-wrapper {
    margin-bottom: 49px;
  }
</style>