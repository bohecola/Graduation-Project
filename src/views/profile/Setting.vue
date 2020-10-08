<template>
  <div id="setting">
    <back-nav-bar title="设置"/>
    <van-cell-group style="margin-top: 16px">
      <!-- <van-cell center title="消息通知">
        <van-switch v-model="check" slot="right-icon" size="24" />
      </van-cell> -->
    </van-cell-group>
    <van-cell-group style="margin-top: 16px">
      <van-cell title="用户协议" is-link to="/profile/setting/user_agreement" />
      <van-cell title="隐私政策" is-link to="/profile/setting/privacy_policy" />
      <van-cell title="关于我们" is-link to="/profile/setting/about_us" />
    </van-cell-group>
    <van-cell-group title=" ">
      <!-- <van-cell v-show="this.$store.state.isLogin" title="重置密码" is-link to="/profile/setting/reset_password" /> -->
    </van-cell-group>
    <van-cell-group v-show="this.$store.state.isLogin" style="margin-top: 16px">
      <van-cell title="退出" is-link to="/profile" @click="logoutClick"/>
    </van-cell-group>
    <!-- Setting 子路由 -->
    <router-view class="cover"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  // 导入 Cell 单元格
  import { Cell, CellGroup } from 'vant'
  // 导入 Switch 开关
  import { Switch } from 'vant'

  import { deleteAccessToken } from 'network/user'

  import BackNavBar from 'components/content/navbar/BackNavBar'

  Vue.use(Cell)
  Vue.use(CellGroup)
  Vue.use(Switch)

  export default {
    name: 'Setting',
    data() {
      return {
        check: true
      }
    },
    components: {
      BackNavBar
    },
    methods: {
      logoutClick() {
        //删除服务器端 access_token
        deleteAccessToken(this.$store.state.token)
        //删除本地 localStorage 里的 access_token
        localStorage.removeItem('access_token')
        this.$store.commit('setLogout')
      }
    }
  }
</script>

<style scoped>
  /* #setting {

  } */
  
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: #fff;
    z-index: 1;
  }
</style>