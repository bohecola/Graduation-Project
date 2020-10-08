<template>
  <div id="info">
    <!-- 导航栏 -->
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group style="margin-top: 16px">
      <van-cell title="头像" center is-link>
        <van-uploader accept="image" :after-read="afterRead" :max-count="1">
          <van-image
            round
            width="2.5rem"
            height="2.5rem"
            fit="cover"
            :src="this.$store.state.user.avatar"
          />
        </van-uploader>
      </van-cell>
      <van-cell title="昵称" icon="edit" is-link :value="this.$store.state.user.name" to="/profile/info/edite_name" />
      <van-cell title="手机号"  :value="this.$store.state.user.phone"/>
      <van-cell title="注册时间"  :value="getDate"/>
    </van-cell-group>
    <!-- Info 子路由 -->
    <router-view class="cover"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Cell, CellGroup } from 'vant'
  import { NavBar, Toast } from 'vant'
  import { Uploader } from 'vant'

  import { uploadAvatar, updateAvatar } from 'network/user'

  Vue.use(Cell).use(CellGroup)
  Vue.use(NavBar).use(Toast)
  Vue.use(Uploader)

  export default {
    name: 'Info',
    data() {
      return {
      
      }
    },
    computed: {
      getDate() {
        let str = /\d{4}-\d{1,2}-\d{1,2}/g.exec(this.$store.state.user.created_at)[0]
        return str
      }
    },
    methods: {
      //导航路由
      onClickLeft() {
        this.$router.go(-1)
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        let formData = new FormData()
        formData.append('image', file.file)
        formData.append('type', 'avatar')
        uploadAvatar(this.$store.state.token, formData).then(res => {
          // 通过头像图片的 id 去查询新的头像，并将其路径进行修改
          // 上传成功后，更新头像 (替换当前用户头像路径 为 当前用户刚上传的头像路径)
          updateAvatar(this.$store.state.token, res.id).then(res => {
            this.$store.commit('updateCurrentAvatar', res.avatar)
            Toast('更新头像成功')
          }).catch(res => {
            console.log(res)
          })
        }).catch(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  /* #info {
    
  } */

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: #fff;
    z-index: 1;
  }
</style>