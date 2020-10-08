<template>
  <!-- 导航栏 -->
  <van-row type="flex" class="home-nav">
    <!-- logo -->
    <van-col span="4" class="logo">
        <font-awesome-icon :icon ="['far', 'lemon']" size="lg"></font-awesome-icon>
        <!-- Logo -->
    </van-col>
    <!-- search -->
    <van-col span="16">
      <form action="/">
        <van-search  placeholder="请输入相关公司名称" v-model="value" @focus="onFocus" />
      </form>
    </van-col>
    <!-- login / user-icon -->
    <van-col v-if="this.$store.state.isLogin" span="4">
      <van-image
        round
        width="2rem"
        height="2rem"
        fit="cover"
        :src="this.$store.state.user.avatar"
        @click="imageClick"
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
      },
      imageClick(){
        this.$router.push('/profile/info')
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

  .logo {
    /* color: #1989fa; */
    color: skyblue;
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