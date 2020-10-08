<template>
  <div id="news">
    <!-- 导航栏 -->
    <van-nav-bar
      title="新闻"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <h1 class="article-title">{{ news.title }}</h1>
    <p class="article-subtitle">{{ news.created_at }}</p>
    <mavon-editor 
      ref="mavonEditor"
      :toolbarsFlag="false"
      :subfield="false"
      :defaultOpen="'preview'"
      :boxShadow="false"
      previewBackground="#fff"
      class="editor"
    />
  </div>
</template>

<script>
  import Vue from 'vue'
  import { NavBar } from 'vant'
  import mavonEditor from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  import { getArticle } from 'network/news'

  Vue.use(NavBar)
  Vue.use(mavonEditor)

  export default {
    name: 'News',
    data() {
      return {
        news: ''
      }
    },
    mounted() {
      getArticle(this.$route.params.id).then(res => {
        // console.log(res)
        this.news = res
        this.$refs.mavonEditor.d_value = this.news.content;
      }).catch(res => {
        console.log(res)
      })
    },
    methods: {
      //导航路由
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style>
  #news {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: #fff;
    z-index: 1;
    font-family: "Microsoft YaHei";
  }

  .article-title {
    color: #666;
    font-weight: 500;
    padding: 16px 5% 6px;
    margin: 46px 0 0 0;
    font-size: 1.25em;
  }

  .article-subtitle {
    padding: 0 5%;
    color: #bbb;
    font-size: 14px;
  }

  .v-note-wrapper .v-note-panel .v-note-show .v-show-content {
    padding: 16px 5% 0 !important;
  }

  .editor {
    font-family: "Microsoft YaHei" !important;
    border: none !important;
    z-index: 0 !important;
    color: #666 !important;
    font-size: 1rem !important;
  }

  .editor p img{
    display: block;
    max-width: 95% !important;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6px;
    background-color: transparent !important;
  }

  .editor code {
    box-shadow: none;
  }
</style>