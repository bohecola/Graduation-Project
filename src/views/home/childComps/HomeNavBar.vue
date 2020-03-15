<template>
  <!-- 导航栏 -->
  <van-row type="flex" class="home-nav">
    <!-- logo -->
    <van-col span="4">
      logo
    </van-col>
    <!-- search -->
    <van-col span="16">
      <form action="/">
        <van-search  placeholder="请输入搜索关键词" v-model="value" @focus="onFocus" />
      </form>
    </van-col>
    <!-- login / user-icon -->
    <van-col v-if="isLogin" span="4">
      <van-image
        round
        width="2.5rem"
        height="2.5rem"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </van-col>
    <van-col v-else class="login-link" span="4" @click="loginClick">登录</van-col>
  </van-row>
</template>

<script>
  import Vue from 'vue';
  // 导入 Layout 布局组件
  import { Col, Row } from 'vant';
  // 导入 Search 组件
  import { Search } from 'vant'
  // 导入 Image 组件
  import { Image } from 'vant';

  Vue.use(Col).use(Row).use(Search).use(Image);

  export default {
    name: 'HomeNavBar',
    data() {
      return {
        value: '',
        isLogin: false
      }
    },
    components: {

    },
    methods: {
      loginClick() {
        this.$router.push('/login')
      },
      onFocus() {
        this.$router.push('/search')
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    position: fixed;
    align-items: center;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    /* 视图层权重 1 */
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }

  /* 修改 van-search 默认padding */
  .van-search {
    padding-left: 0;
    padding-right: 0;
  }
  
  .login-link {
    font-size: 14px;
    color: #1989fa;
  }
</style>