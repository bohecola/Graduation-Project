<template>
  <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      immediate-check
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.id"
        clickable
        :value="item.created_at"
        @click="itemClick(item)"
      >
        <template #title class="van-ellipsis">
          <span class="custom-title">{{item.title}}</span>
        </template>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>

<script>
  import Vue from 'vue';
  // 导入List列表组件
  import { List, Cell } from 'vant';
  import { PullRefresh } from 'vant'

  import { getArticleList } from 'network/news';

  Vue.use(List).use(Cell)
  Vue.use(PullRefresh)


  export default {
    name: 'Visited',
    data() {
      return {
        title: '',
        list: [],
        isLoading: false,
        loading: false,
        finished: false
      }
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
        getArticleList(null, 3).then(res => {
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
        getArticleList(null, 3).then(res => {
          // 清空上一次网络请求中存入 list 的数据
          this.list = []
          res.forEach(element => {
            this.list.push(element)
          })
          this.finished = true
          this.isLoading = false
        }).catch(res => {
          console.log(res)
        })
      },
      itemClick(item) {
        this.$router.push('/news/' + item.id)
      } 
    }
  }
</script>

<style scoped>
  .van-cell__title {
    flex: 3;
  }
  .van-cell__value {
    flex: 2;
  }
</style>