<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
  import Vue from 'vue'
  // 导入 NavBar 导航栏
  import { NavBar } from 'vant'

  Vue.use(NavBar)

  export default {
    name: 'BackNavBar',
    props: {
      title: String
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>