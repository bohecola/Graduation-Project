<template>
  <div>
    <!-- 经营范围 collapse 折叠面板 -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="统一社会信用代码" icon="award-o" name="1">{{getCode}}</van-collapse-item>
      <van-collapse-item title="经营范围" icon="hotel-o" name="2">{{companyInfo.scope}}</van-collapse-item>
      <van-collapse-item title="公司类型" icon="apps-o" name="3">{{companyInfo.type}}</van-collapse-item>
    </van-collapse>
    <!-- 官网 地址 邮箱 电话 -->
    <van-cell title="官网" icon="medal-o" :value="getWebsite"/>
    <van-cell title="地址" icon="location-o" :value="companyInfo.address"/>
    <van-cell title="邮箱" icon="free-postage" :value="getEmail"/>
    <van-cell title="电话" icon="phone-o" :value="getTelNumber"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Icon, Cell, Collapse, CollapseItem } from 'vant'

  Vue.use(Cell).use(Icon)
  Vue.use(Collapse)
  Vue.use(CollapseItem)
  

  export default {
    name: 'DetailContent',
    props: {
		  companyInfo: {
		    type: Object
      }
    },
    data() {
      return {
        activeNames: ['2'],
      }
    },
    computed: {
      // 1.社会统一信用代码
      getCode() {
        if(this.companyInfo.code == '') {
          return '暂无社会统一信用代码'
        } else {
          return this.companyInfo.code
        }
      },
      // 2.官网地址
      getWebsite() {
        if(this.companyInfo.website == '') {
          return '暂无官网'
        } else {
          return this.companyInfo.website
        }
      },
      // 3.邮箱
      getEmail() {
        if(this.companyInfo.email == '') {
          return '暂无邮箱信息'
        } else {
          return this.companyInfo.email
        }
      },
      // 4.电话
      getTelNumber() {
        if(this.companyInfo.telnumber1 == '') {
          return '暂无电话信息'
        } else {
          return this.companyInfo.telnumber1
        }
      }
    }
  }
</script>

<style scoped>
  .van-cell__value {
    flex: 4;
  }
</style>