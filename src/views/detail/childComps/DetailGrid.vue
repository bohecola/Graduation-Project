<template>
  <!-- 导航宫格 Grid 法人 资本 日期 -->
  <van-grid :column-num="3">
    <van-grid-item> 
      <p class="grid-title">{{getPerson}}</p>
      <van-icon name="manager-o" size="1.6rem" color="#1989fa" />
      <p class="grid-desc">法定代表人</p>
    </van-grid-item>

    <van-grid-item>
      <p class="grid-title">{{getCapital}} (万)</p>
      <van-icon name="balance-o" size="1.6rem" color="#1989fa" />
      <p class="grid-desc">注册资本</p>
    </van-grid-item>
  
    <van-grid-item icon="clock-o">
      <p class="grid-title">{{getDate}}</p>
      <van-icon name="clock-o" size="1.6rem" color="#1989fa" />
      <p class="grid-desc">成立日期</p>
    </van-grid-item>
  </van-grid>  
</template>

<script>
  import Vue from 'vue'
  import { Grid, GridItem, Icon } from 'vant'

  Vue.use(Grid).use(GridItem).use(Icon)

  export default {
    name: 'DetailGrid',
    props: {
		  companyInfo: {
		    type: Object
      }
    },
    computed: {
      // 1.法人
      getPerson() {
        if(this.companyInfo.person == '') {
          return '暂无数据'
        } else {
          return this.companyInfo.person
        }
      },
      // 2.注册资本
      getCapital() {
        if(this.companyInfo.capital == '') {
          return '暂无数据'
        } else {
          return parseInt(this.companyInfo.capital)
        }
      },
      // 3.成立日期
      getDate() {
        if(this.companyInfo.date == '') {
          return '暂无数据'
        } else {
          return this.companyInfo.date
        }
      },
    }
  }
</script>

<style scoped>
  .grid-title {
    margin: 12px 0;
    font-size: 15px;
  }

  .grid-desc {
    margin-top: 10px;
    font-size: 12px;
  }
</style>