<template>
  <div id="person">
    <!-- Person -->
    <form action="/" class="person-bar">
      <van-search
        v-model.trim="keywords"
        placeholder="请输入相关人物名称"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        @input="onInput"
        @clear="onClear"
      />
    </form>
    <!-- Search Result -->
    <van-list
      v-if="isSearch"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      class="list-wrapper"
      offset="50"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.person"
        :title="item.person"
        clickable
        @click="itemClick(item)"
      >
      <van-tag v-if="item.province" plain type="primary">{{item.province}}</van-tag>
      <van-tag v-if="item.city" plain type="success">{{item.city}}</van-tag>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
  import Vue from 'vue'
  // 导入 Search 组件
  import { Search, Toast } from 'vant'
  // 导入 List 组件
  import { List, Cell, Tag } from 'vant';

  import { getPerson, getPersonNext } from 'network/company'

  Vue.use(Search).use(List).use(Cell).use(Toast).use(Tag)

  export default {
    name: 'Search',
    data() {
      return {
        keywords: '',
        page: 1,
        list: [],
        loading: false,
        finished: false,
        next: null,
        isSearch: false
      }
    },
    methods: {
      onSearch() {
        if(this.keywords == '' || this.keywords == '公司') {
          this.page = 1
          this.isSearch = false
          this.list = []
        } else {
          // 重置加载状态
          this.finished = false
          // 发送网络请求
          getPerson(this.keywords).then(res => {
            // 清空上一次网络请求中存入 list 的数据
            this.list = []
            // 重置 page 为1
            this.page = 1
            Toast('为您找到'+res.meta.total+'个结果')
            // 重新向数组 list 中添加本次网络请求的数据
            res.data.forEach(element => {
              this.list.push(element)
            })
            // list数组 有了数据后 展示 list 组件
            this.isSearch = true
            // 当第一页请求的数据小于 15 个时，表明数据已全部加载完成
            if(this.list.length < 15) {
              this.loading = false
              this.finished = true
            } else {
              // 获取下一页的 next的 url
              this.next = res.links.next
              this.loading = false
            }
          }).catch(res => {
            console.log(res)
          })
        }
      },
      onInput() { // 与 onSearch 代码一样 仅增加了输入框内容为空时的条件
        // 若关键字为空，不发送网络请求并清空 list 数组中存储的上一次查询的数据
        if(this.keywords == '' || this.keywords == '公司') {
          this.page = 1
          this.isSearch = false
          this.list = []
        } else {
          // 重置加载状态
          this.finished = false
          // 输入框内容变化时继续发送网络请求
          getPersonNext(this.keywords).then(res => {
            // 清空上一次网络请求中存入 list 的数据
            this.list = []
            // 重置 page 为1
            this.page = 1
            Toast('为您找到'+res.meta.total+'个结果')
            // 重新向数组 list 中添加这次网络请求的数据
            res.data.forEach(element => {
              this.list.push(element)
            })
            // list数组 有了数据后 展示 list 组件
            this.isSearch = true
            // 当第一页请求的数据小于 15 个时，表明数据已全部加载完成
            if(this.list.length < 15) {
              this.loading = false
              this.finished = true
            } else {
              // 获取下一页的 next的 url
              this.next = res.links.next
              this.loading = false
            }
          }).catch(res => {
              console.log(res)
          })
        }
      },
      onLoad() {
        // 如果下一页数据不为空，上滑继续加载
        if(this.next !== null) {
          this.page++
          getPersonNext(this.keywords, this.page).then(res => {
            // 检查是否还有下一页数据
            this.next = res.links.next
            // 向数组中添加数据
            res.data.forEach(element => {
              this.list.push(element)
            })
            this.loading = false
          }).catch(res =>{
            console.log(res)
          })
        }else {
          this.finished = true
        }
      },
      onCancel() {
        // 点击取消按钮后空list，返回上一路由 重置加载状态
        this.loading = false
        this.finished = false
        this.page = 1
        this.list = []
        this.$router.go(-1)
      },
      onClear() {
        this.loading = false
        this.finished = false
        this.isSearch = false
        this.page = 1
        this.list = []
      },
      itemClick(item) {
        this.$router.push('/detail/' + item.id)
      }
    }
  }
</script>

<style scoped>
  #person {
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

  .person-bar {
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
  .van-cell__value span {
    margin-left: 10px;
  }
</style>