<template>
  <div id="detail">
    <!-- 导航栏 -->
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <detail-card :companyInfo="companyInfo"/>
    <!-- <detail-swiper/> -->
    <detail-grid :companyInfo="companyInfo"/>
    <detail-content :companyInfo="companyInfo"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar, Toast } from 'vant'
  import { Divider } from 'vant'

  import DetailCard from './childComps/DetailCard'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailGrid from './childComps/DetailGrid'
  import DetailContent from './childComps/DetailContent'

  import { getDetail, Company } from 'network/company'

  Vue.use(NavBar).use(Toast)
  Vue.use(Divider)

  export default {
    name: 'Detail',
    data() {
      return {
        id: null,
        companyInfo: {},
      }
    },
    components: {
      DetailCard,
      DetailSwiper,
      DetailGrid,
      DetailContent
    },
    created() {
      this.id = this.$route.params.id
      getDetail(this.id).then(res => {
        this.companyInfo = new Company(res)
      }).catch(res => {
        console.log(res)
      })
    },
    methods: {
      //导航路由
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;

    /* 解决 MainTabBar 后显示遮挡问题 */
    z-index: 1;
    background-color: #fff;
  }
</style>