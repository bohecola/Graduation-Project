<template>
  <div id="resetPassword">
    <back-nav-bar title="重置密码"/>
    <van-cell-group class="cell-group" title=" ">
      <van-field v-model="oldpassword" type="password" left-icon="bag-o" placeholder="请输入原密码"/>
      <van-field v-model="newPassword" type="password" left-icon="bag-o" placeholder="请输入新密码"/>
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
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Button } from 'vant';
  // 导入 Field CellGroup Button组件
  import { Field, CellGroup } from 'vant'
  import BackNavBar from 'components/content/navbar/BackNavBar'

  Vue.use(Button)
  Vue.use(Field).use(CellGroup)

  export default {
    name: 'ResetPassword',
    data() {
      return {
        oldpassword: '',
        newPassword: '',
        sms: ''
      }
    },
    components: {
      BackNavBar
    }
  }
</script>

<style scoped>
  #resetPassword {
    
  }
</style>