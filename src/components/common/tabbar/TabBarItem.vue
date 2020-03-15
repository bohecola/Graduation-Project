<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      // TabBarItem 默认活跃颜色
      default: '#666'
    },
    inactiveColor: {
      type: String,
      // TabBarItem 默认不活跃颜色
      default: '#666'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {color: this.inactiveColor}
    }
  },
  methods: {
    itemClick() {
      // 如果当前活跃路由 与 点击后获取的路由相等 那么不进行路由跳转，反之进行路由跳转
      this.$route.path == this.path ? console.log('仍在当前路由') : this.$router.replace(this.path)  
    }
  }
}

</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item svg{
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>