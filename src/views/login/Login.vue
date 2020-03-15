<template>
  <div id="login">
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group class="cell-group" title=" ">
      <van-field v-model="tel" type="tel" left-icon="phone-o" placeholder="请输入手机号"/>
      <van-field v-model="password" type="password" left-icon="bag-o" placeholder="请输入密码"/>
    </van-cell-group>
    <van-button class="submit" type="info" round>登录</van-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { NavBar, CellGroup, Field, Button } from 'vant'

  Vue.use(NavBar).use(CellGroup).use(Field).use(Button)

  export default {
    name: 'Login',
    data() {
      return {
        tel: '',
        password: '',
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>
  #login {
    position: relative;
    background: #fff;
    height: 100vh;
    /* 解决 MainTabBar 后显示遮挡问题 */
    z-index: 1;
  }

  .cell-group {
    margin-top: 1rem;
  }

  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    margin: 2rem auto;
    height: 2.4rem;
  }

  .submit span {
    line-height: 2.3rem;
  }
</style>