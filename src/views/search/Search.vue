<template>
  <div id="search">
    <!-- Search -->
    <form action="/" class="searh-bar">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- Search Result -->
    <van-list
      v-if="result"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="list-wrapper"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>

<script>
  import Vue from 'vue'
  // 导入 Search 组件
  import { Search } from 'vant'
  // 导入 List 组件
  import { List, Cell } from 'vant';

  Vue.use(Search).use(List).use(Cell)

  export default {
    name: 'Search',
    data() {
      return {
        result: true,
        value: '',
        list: [],
        loading: false,
        finished: false
      }
    },
    methods: {
      onSearch() {

      },
      onCancel() {
        this.$router.go(-1)
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
  #search {
    position: relative;
    height: 100vh;
    /* 解决 search-bar fixed顶部后遮挡问题 */
    padding-top: 54px;
    /* 解决 MainTabBar 后显示遮挡问题 */
    z-index: 1;
    background-color: #fff;
  }

  .list-wrapper {
    /* 解决 MainTabBar 后显示遮挡问题 */
    background-color: #fff;
  }

  .searh-bar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    z-index: 1;
  }

  .van-search__action {
    color: #1989fa;
  }
</style>