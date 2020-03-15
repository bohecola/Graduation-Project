<template>
  <div id="profile">
    <user-card path="/login"/>
    <user-options/>
    <!-- profile 子路由 -->
    <router-view class="cover"/>
  </div>
</template>

<script>
  import UserCard from './childComps/UserCard'
  import UserOptions from './childComps/UserOptions'

  export default {
    name: 'Profile',
    components: {
      UserCard,
      UserOptions
    }
  }
</script>

<style scoped>
  #profile {
    height: 100vh;
  }

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