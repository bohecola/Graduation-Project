<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    immediate-check
    @load="onLoad"
  >
    <van-cell
      v-for="item in list"
      :key="item"
      :title="item"
    />
  </van-list>
</template>

<script>
  import Vue from 'vue';
  // 导入List列表组件
  import { List, Cell } from 'vant';

  Vue.use(List).use(Cell)

  export default {
    name: 'Visited',
    data() {
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    },
    methods: {
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