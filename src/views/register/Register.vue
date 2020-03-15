<template>
  <div id="register">
    <!-- 导航栏 -->
    <back-nav-bar title="注册账号"/>
    <!-- 注册表单 -->
    <van-cell-group class="cell-group" title=" ">
      <van-field v-model="tel" type="tel" left-icon="phone-o" placeholder="请输入手机号"/>
      <van-field v-model="password" type="password" left-icon="bag-o" placeholder="请输入密码"/>
      <van-field
        v-model="sms"
        center
        clearable
        left-icon="chat-o"
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button class="submit" type="info" round>注册</van-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BackNavBar from 'components/content/navbar/BackNavBar'
  import { CellGroup, Field, Button } from 'vant'

  Vue.use(Field).use(Button).use(CellGroup)

  export default {
    name: 'Register',
    data() {
      return {
        tel: '',
        password: '',
        sms: ''
      }
    },
    components: {
      BackNavBar
    }
  }
</script>

<style scoped>
  #register {
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