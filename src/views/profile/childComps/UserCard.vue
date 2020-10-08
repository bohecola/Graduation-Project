<template>
  <div class="user-card">
    <van-cell-group title=" ">
      <!-- 登录后UserCard -->
      <van-cell v-if="this.$store.state.isLogin" center is-link to="/profile/info">
        <van-row type="flex" justify="space-between" class="user-row">
          <van-image
            round
            width="4rem"
            height="4rem"
            fit="cover"
            :src="this.$store.state.user.avatar"
          />
          <van-col span="18">
            <div class="user-name">{{this.$store.state.user.name}}</div>
            <div class="user-detail">{{usertype}}</div>
          </van-col> 
        </van-row>
      </van-cell>
      <!-- 未登录UserCard -->
      <van-cell v-else center>
        <van-row type="flex" justify="space-between" class="user-row" @click="loginClick">
          <van-image
            round
            width="4rem"
            height="4rem"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <van-col span="18">
            <div class="user-name">立即登录</div>
            <div class="user-detail">登录后同步用户信息</div>
          </van-col> 
        </van-row>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Image } from 'vant'
  import { Cell, CellGroup, Row, Col } from 'vant'
  import { User } from 'network/user'

  Vue.use(Cell).use(CellGroup).use(Row).use(Col)
  Vue.use(Image)

  export default {
    name: 'UserCard',
    props: {
      path: String
    },
    data() {
      return {
        usertype: '普通用户',
      }
    },
    computed: {

    },
    created() {
      // this.user = new User()
    },
    mounted() {
      
    },
    methods: {
      loginClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .user-row {
    align-items: center;
  }

  .user-name {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    color: #666;
  }
  .user-detail {
    color: #999;
  }
</style>