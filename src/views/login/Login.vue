<template>
  <div id="login">
    <!-- 导航栏 -->
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 登录表单 -->
    <van-form validate-first @failed="onFailed" @submit="onSubmit">
      <van-field
        v-model="tel"
        name="tel"
        type="tel"
        left-icon="phone-o"
        placeholder="请填写手机号"
        :rules="[{ pattern: tel_parttern, message: '请填写正确的手机号码' }]"
        clearable
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        left-icon="bag-o"
        placeholder="请填写密码"
        :rules="[{ pattern: password_pattern, message: '请填写不少于6位的密码' }]"
        clearable
      /> 
      <div style="margin: 16px">
        <!-- <van-button round block type="info" @click="registerClick"> -->
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { NavBar, Toast, Form, Field, Button } from 'vant'

  import { getAccessToken } from 'network/user'

  Vue.use(NavBar).use(Toast).use(Form).use(Field).use(Button)

  export default {
    name: 'Login',
    data() {
      return {
        password_pattern: /^.{6,}$/,
        tel_parttern: /^1(3|4|5|6|7|8|9)\d{9}$/,
        tel: '',
        password: '',
        access_token: null,
        refresh_token: null
      }
    },   
    methods: {
      //导航路由
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        this.$router.push('/register')
      },
      //即正则不通过，提示错误信息
      onFailed(errorInfo) {
        Toast(errorInfo.errors[0].message)
      },
      //正则通过，提交表单 发送 axios 的 POST 网络请求，成功->前端提示登录成功，失败->前端提示服务器返回的响应数据
      onSubmit(obj) { //obj 为整个提交表单的数据对象 为{tel: , password: }填写框的数据 返回access_token
        getAccessToken(
          obj.tel,
          obj.password
        ).then(res => {
          localStorage.setItem('access_token', res.access_token)
          this.$store.commit('setLogin')
          this.$store.dispatch('a_getCurrentUserInfo', res.access_token)
          this.$router.push('/profile')
        }).catch(res => {
          Toast('用户名或密码错误')
        })
      },
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
</style>