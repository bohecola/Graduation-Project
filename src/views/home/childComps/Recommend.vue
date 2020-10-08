<template>
  <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
    <van-list
      v-model="loading"
      ref="list"
      :finished="finished"
      finished-text="没有更多了"
      immediate-check
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.name"
        :title="item.name"
        clickable
        @click="itemClick(item)"
      >
      <van-tag plain color="#fb7281">推荐</van-tag>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>

<script>
  import Vue from 'vue';
  // 导入List列表组件
  import { List, Cell, Tag } from 'vant'
  import { PullRefresh } from 'vant'
  import { getRandomCompany } from 'network/company'

  Vue.use(List).use(Cell).use(Tag)
  Vue.use(PullRefresh)

  export default {
    name: 'Recommend',
    data() {
      return {
        count: 0,
        isLoading: false,
        list: [],
        loading: false,
        finished: false
      }
    },
    created() {
      
    },
    mounted() {
      // console.log(this.$refs.list)
      // console.log(this.$refs.list.check)
      // this.$refs.list.check() 
    },
    activated() {
      // console.log('activated')
    },
    deactivated() {
      // console.log('deactivated')
    },
    methods: {
      onRefresh() {
        // 重置加载状态
        this.finished = false
        getRandomCompany().then(res => {
          // 清空上一次网络请求中存入 list 的数据
          this.list = []
          // 重新向数组 list 中添加本次网络请求的数据
          res.forEach(element => {
            this.list.push(element)
          })
          this.finished = true
          this.isLoading = false
          // console.log(res)
        }).catch(res =>{
          console.log(res)
        })
      },
      onLoad() {
        // 重置加载状态
        this.finished = false
        getRandomCompany().then(res => {
          // 清空上一次网络请求中存入 list 的数据
          this.list = []
          // 向数组 list 中添加本次网络请求的数据
          res.forEach(element => {
            this.list.push(element)
          })
          this.finished = true
          this.isLoading = false
          // console.log(res)
        }).catch(res =>{
          console.log(res)
        })
      },
      itemClick(item) {
        this.$router.push('/detail/' + item.id)
      } 
    }
  }
</script>

<style scoped>
  .van-cell__title{
    flex: 6;
  }
</style>