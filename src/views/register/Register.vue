<template>
  <div id="register">
    <!-- 导航栏 -->
    <back-nav-bar title="注册账号"/>
    <!-- 注册表单 -->
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
      <van-field
        v-model="sms"
        name="sms"
        type="digit"
        left-icon="chat-o"
        placeholder="请填写短信验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
        clearable
      >
        <van-button 
          :disabled="disabled"
          :text="text"
          slot="button"
          size="small"
          type="primary"
          @click.prevent="sendSmsClick"
        />
      </van-field>
      <div style="margin: 16px">
        <!-- <van-button round block type="info" @click="registerClick"> -->
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BackNavBar from 'components/content/navbar/BackNavBar'
  import { Toast, Form, Field, Button } from 'vant'

  import { sendSMS, registerUser } from 'network/user'

  Vue.use(Toast).use(Form).use(Field).use(Button)

  export default {
    name: 'Register',
    data() {
      return {
        password_pattern: /^.{6,}$/,
        tel_parttern: /^1(3|4|5|6|7|8|9)\d{9}$/,
        tel: '',
        password: '',
        sms: '',
        //短信倒计时数据
        disabled: false,
        isSend: false,
        text: '发送验证码',
        second: 5,
        //服务器返回的 key
        key: null,
      }
    },
    components: {
      BackNavBar
    },
    methods: {
      //即正则不通过，提示错误信息
      onFailed(errorInfo) {
        Toast(errorInfo.errors[0].message)
      },
      //正则通过，提交表单 发送 axios 的 POST 网络请求，成功->前端提示注册成功，失败->前端提示服务器返回的响应数据
      onSubmit(obj) { //obj 为整个提交表单的数据对象 为{tel: , password: , sms:}填写框的数据
        registerUser(
          obj.tel,
          obj.password,
          obj.sms,
          this.key
        ).then(res => {
            Toast('注册成功')
        }).catch(res => {
            //用户没有获取验证码二随机填写数字提交，此时本地 key 为空，提示信息为请填写正确的验证码
            if(this.key == null) {
              Toast('请填写正确的验证码')
            } else {
              //服务器响应数据失败，返回服务器响应的错误提示信息
              Toast(res.message)
            }
        })
      },
      sendSmsClick() {
        //若未填写用户名和密码，则提示先填写用户名和密码
        if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel)) {
          Toast('请填写正确的手机号码')
        } else {
          //调用 network 中 sendSMS方法发送 POST 网络请求 提交 phone(key) tel(value) 请求短信验证码
          sendSMS(this.tel).then(// 成功: 短信发送成功，并且禁止再次点击发送按钮，开启定时器等待重新发送
            res => {
              this.isSend = true
              this.disabled = true
              Toast('短信验证码发送成功')
              let timer = setInterval(() => {
                this.second--
                this.text = '重新发送(' + this.second + ')'
                //当重新发送时间结束，清除定时器，发送状态变为false，重新打开按钮点击，重置等待时间和按钮文字内容
                if(this.second <= 0) {
                  clearInterval(timer)
                  this.isSend = false
                  this.disabled = false
                  this.second = 5
                  this.text = '发送验证码'
                }
              }, 1000)
              // 发送短信验证码成功后，同时获取 laravel 提供的 key, POST提交时约定键名为 verification_key 
              this.key = res.key
            }
          ).catch(res => { //失败: 短信发送失败，提示该用户已注册
              Toast('该手机号码已被注册')
          })
        }
      },
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
    margin-top: 1rem
  }
</style>