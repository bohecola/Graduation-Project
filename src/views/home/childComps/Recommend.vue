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
        :key="item"
        :title="item + ' -'"
      />
    </van-list>
  </van-pull-refresh>
</template>

<script>
  import Vue from 'vue';
  // 导入List列表组件
  import { List, Cell } from 'vant';
  import { PullRefresh } from 'vant';

  Vue.use(List).use(Cell)
  Vue.use(PullRefresh);

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
    mounted() {
      // console.log(this.$refs.list)
      console.log(this.$refs.list.check)
      // this.$refs.list.check() 
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
          this.count++;
        }, 1000);
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }    
    }
  }
</script>

<style scoped>

</style>