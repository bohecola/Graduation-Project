<template>
  <div id="rank">
    <div class="card">
    </div>
    <van-cell
      v-for="(item, index) in list"
      :key="item.name"
      clickable
      @click="itemClick(item)"
    >
      <template #title>
        <span v-if="index+1 <= 3" class="title-index top-three">{{index + 1}}</span>
        <span v-else class="title-index">{{index + 1}}</span>
        <span class="custom-title">{{item.name}}</span>
        <span class="visited">{{item.visited}}</span>
      </template>
      <!-- <van-tag v-if="index+1 <= 3" type="warning">热</van-tag> -->
    </van-cell>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Tag, Toast, Cell } from 'vant'
  import { Divider } from 'vant'

  import { getRankCompany, Company } from 'network/company'

  Vue.use(Tag).use(Toast).use(Cell)
  Vue.use(Divider)

  export default {
    name: 'Rank',
    data() {
      return {
        list: []
      }
    },
    created() {
      getRankCompany().then(res => {
        res.forEach(element => {
          this.list.push(element)
        })
      }).catch(res => {
        console.log(res)
      })
    },
    methods: {
      itemClick(item) {
        this.$router.push('/detail/' + item.id)
      }
    }
  }
  
</script>

<style scoped>
  #rank {
    margin-bottom: 49px;
  }

  .card {
    width: 100%;
    height: 120px;
    background:url('~assets/img/rank.jpg') no-repeat center;
    background-size: cover;
  }

  .custom-title {
    margin-left: 5px;
  }

  .van-cell__title {
    flex: 5;
  }

  .title-index {
    display: inline-block;
    text-align: center;
    width: 24px;
    /* font-size: 14px; */
    color: orangered;
  }

  .top-three {
    font-style: italic;
    font-size: 16px;
    font-weight: 600;
    color: crimson;
  }

  .visited {
    margin-left: 10px;
    display: inline-block;
    color: gray;
    font-size: 12px;
  }
</style>