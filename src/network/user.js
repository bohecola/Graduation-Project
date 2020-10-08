import { request } from './request'

// 处理发送短信验证码接口
export function sendSMS(tel) {
  return request({
    url: '/verificationCodes',
    method: 'post',
    data: {
      phone: tel
    }
  })
}

// 处理注册用户接口
export function registerUser(tel, password, sms, key) {
  // 形参数为服务端定义的参数名称
  return request({
    url: '/users',
    method: 'post',
    data: {
      name: tel, //默认用户名提交为手机号
      phone: tel,
      password: password,
      verification_code: sms,
      verification_key: key
    }
  })    
}

// 处理获取 access_token 接口
export function getAccessToken(tel, password) {
  // 形参数为服务端定义的参数名称
  return request({
    url: '/authorizations',
    method: 'post',
    data: {
      username: tel, //登录用户名为手机号
      password: password,
      grant_type: 'password',
      client_id: '1',
      client_secret: 'bYc2OSntlB5C8gB6FKTh4atN20J7AjVIP5r9Cl0f'
    }
  })    
}

// 处理提交 Token 获取当前 Token 对应的用户信息，实现用户登录效果
export function getLoginUserInfo(access_token) {
  // 形参数为服务端定义的参数名称
  return request({
    url: '/user',
    headers: {'Authorization':'Bearer '+ access_token},
    method: 'get',
  })    
}

export function deleteAccessToken(access_token) {
  // 形参数为服务端定义的参数名称
  return request({
    url: '/authorizations/current',
    headers: {'Authorization':'Bearer '+ access_token},
    method: 'delete',
  })    
}

// 向服务器发送请求，用户上传头像
export function uploadAvatar(access_token, data) {
  return request({
    url: '/images',
    headers: {
      'Content-Type':'multipart/form-data',
      'Authorization':'Bearer '+ access_token
    },
    method: 'post',
    data
  })
}

// 向服务器发送请求，更新用户头像
export function updateAvatar(access_token, avatar_image_id) {
  return request({
    url: '/user',
    headers: {'Authorization':'Bearer '+ access_token},
    method: 'patch',
    data: {
      avatar_image_id: avatar_image_id
    }
  })
}

// 向服务器发送请求，更新用户头像
export function updateUsername(access_token, name) {
  return request({
    url: '/user',
    headers: {'Authorization':'Bearer '+ access_token},
    method: 'patch',
    data: {
      name: name
    }
  })
}

export class User {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.phone = data.phone
    this.email = data.email
    this.email_verified_at = data.email_verified_at
    this.created_at = data.created_at
    this.updated_at = data.updated_at
    this.avatar = data.avatar
    this.introduction = data.introduction
  }
}