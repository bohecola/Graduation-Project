<template>
  <van-cell-group class="detail-card">
    <van-cell center>
      <van-row type="flex" justify="space-between" class="company-row">
        <van-image
          round
          width="4rem"
          height="4rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <van-col span="18">
          <div class="company-name">{{companyInfo.name}}</div>
          <div class="company-detail">
            <van-tag plain type="primary">{{companyInfo.province}}</van-tag>
            <van-tag plain type="success">{{getCity}}</van-tag>
            <van-tag plain color="#fb7281">{{getType}}</van-tag>
            <div class="visited">浏览：{{companyInfo.visited}}</div>
          </div>
        </van-col> 
      </van-row>
    </van-cell>
  </van-cell-group>
</template>

<script>
  import Vue from 'vue'

  import {Cell, CellGroup, Row, Col, Icon } from 'vant'
  import { Image } from 'vant'
  import { Tag } from 'vant'
  

  Vue.use(Cell).use(CellGroup).use(Row).use(Col).use(Icon)
  Vue.use(Image)
  Vue.use(Tag)

  export default {
    name: 'DetailCard',
    props: {
		  companyInfo: {
		    type: Object
      }
    },
    computed: {
      getCity() {
        if(this.companyInfo.city == '') {
          return '暂无信息'
        } else {
          return this.companyInfo.city
        }
      },
      // 公司类型
      getType() {
        // 返回公司类型，不包括括号里的内容
        let str = this.companyInfo.type
        if(str !== undefined) {
          // 去除中文括号和英文括号以及里面的内容
          let str1 = str.replace(/\（.*?\）/g,'')
          return str1.replace(/\(.*?\)/g,'')
        }
      },
    }
  }
</script>

<style scoped>
  .detail-card {
    margin-top: 46px;
  }

  .company-row {
    align-items: center;
  }

  .company-name {
    margin-bottom: 0.25rem;
    font-size: 1rem
  }

  .company-detail span{
    margin-right: 8px;
  }

  .visited {
    color: gray;
  }
</style>