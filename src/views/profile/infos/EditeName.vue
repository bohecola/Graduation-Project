<template>
  <div id="edite_name">
    <!-- 导航栏 -->
    <van-nav-bar
      title="更改名字"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入新的用户名"
      >
        <van-button 
          text="保存"
          slot="button"
          size="small"
          type="primary"
          native-type="submit"
        />
      </van-field>
      <div style="margin: 16px;">
      </div>
    </van-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { NavBar, Toast } from 'vant'
  import { Form, Field } from 'vant'

  import { updateUsername } from 'network/user'

  Vue.use(NavBar).use(Toast)
  Vue.use(Form).use(Field)

  export default {
    name: 'EditeName',
    data() {
      return {
        username: '',
      }
    },
    methods: {
      //导航路由
      onClickLeft() {
        this.$router.go(-1)
      },
      onSubmit(value) {
        updateUsername(this.$store.state.token, this.username).then(res => {
          this.$store.commit('updateCurrentName', res.name)
          Toast('更新成功')
          // console.log(res)
        }).catch(res => {
          Toast('更新失败')
          // console.log(res)
        })
        // console.log('submit', value);
      },
      onFailed(errorInfo) {
        console.log('failed', errorInfo);
      },
    }
  }
</script>

<style scoped>
 /* #edite_name{

 } */
</style>