import { getLoginUserInfo } from '../network/user'

export default {
  //这里的 token 就是 dispatch 所提交过来的 access_token
  a_getCurrentUserInfo(context, token) {
    getLoginUserInfo(token).then(res => {
      context.commit('getCurrentUserInfo', res)
    }).catch(res => {
      console.log(res)
    })
  }
}  
