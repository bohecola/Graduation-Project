<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <font-awesome-icon slot="item-icon-active" :icon ="['fas', 'lemon']" size="lg"></font-awesome-icon>
      <font-awesome-icon slot="item-icon" :icon ="['far', 'lemon']" size="lg"></font-awesome-icon>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/rank">
      <font-awesome-icon slot="item-icon-active" :icon ="['fas', 'clock']" size="lg"></font-awesome-icon>
      <font-awesome-icon slot="item-icon" :icon ="['far', 'clock']" size="lg"></font-awesome-icon>
      <div slot="item-text">排行</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <font-awesome-icon slot="item-icon-active" :icon ="['fas', 'user']" size="lg"></font-awesome-icon>
      <font-awesome-icon slot="item-icon" :icon ="['far', 'user']" size="lg"></font-awesome-icon>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>