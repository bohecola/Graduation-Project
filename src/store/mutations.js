import { User } from 'network/user'

export default {
  //设置用户登入状态，保存 token 到Vuex中的 state 里 
  //由于引用了 vuex-persistedstate ，state 里的变量会被存储在本地的localStorage中 以便刷新不会清空Vuex state中的数据
  setLogin(state) {
    //从localStorage 取出 access_token
    state.token = localStorage.getItem('access_token')
    //登录状态变量 true
    state.isLogin = true
  },

  //获取当前登录用户信息 
  getCurrentUserInfo(state, payload) {
    //这里的 payload 是 action 里异步请求 getLoginUserInfo 结果成功时，返回的 res.data 为当前登录用户可展示的个人信息
    state.user = new User(payload)
    // console.log(state.user)
  },

  //设置用户退出状态 清空 token 以及 当前 user 对象里的用户个人信息
  setLogout(state) {
    state.token = ''
    state.isLogin = false
    state.user = {}
  },

  updateCurrentName(state, name) {
    state.user.name = name
  },

  updateCurrentAvatar(state, avatar) {
    state.user.avatar = avatar
  },
}