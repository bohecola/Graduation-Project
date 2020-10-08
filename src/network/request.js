import axios from 'axios'

export function request(config) {
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://192.168.0.107/api/v1',
    timeout: 5000
  })

  // 2. 添加 axios 拦截器
  // (1) 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // (2) 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    // 服务器响应错误状态时返回对应的错误信息
    return Promise.reject(err.response.data)
  })

  // 3.发送真正的网络请求
  return instance(config)
}