import {request} from './request'

// 按名称查询相应公司，并返回分页后第一页的数据
export function getCompany(keywords) {
  return request({
    url: '/companies/resource',
    method: 'get',
    params: {
      keywords: keywords
    }
  })
}

// 请求要查找的公司集合的下一页
export function getCompanyNext(keywords, page) {
  return request({
    url: '/companies/resource',
    method: 'get',
    params: {
      keywords: keywords,
      page: page
    }
  })
}

// 按人物名称查询相应人物，并返回分页后第一页的数据
export function getPerson(keywords) {
  return request({
    url: '/companies/persons',
    method: 'get',
    params: {
      keywords: keywords
    }
  })
}

// 请求要查找的人物集合的下一页
export function getPersonNext(keywords, page) {
  return request({
    url: '/companies/persons',
    method: 'get',
    params: {
      keywords: keywords,
      page: page
    }
  })
}

// 获取一个随机公司集合
export function getRandomCompany() {
  return request({
    url: '/companies/random',
    method: 'get'
  })
}

// 获取公司浏览次数排名集合
export function getRankCompany() {
  return request({
    url: '/companies/rank',
    method: 'get'
  })
}

// 按id查找相应公司，并返相应的数据
export function getDetail(id) {
  return request({
    url: '/companies',
    method: 'get',
    params: {
      id
    }
  })
}

export class Company {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.province = data.province
    this.city = data.city
    this.code = data.code
    this.person = data.person
    this.type = data.type
    this.date = data.date
    this.capital = data.capital
    this.address = data.address
    this.email = data.email
    this.scope = data.scope
    this.website = data.website
    this.telnumber1 = data.telnumber1
    this.telnumber2 = data.telnumber2
    this.visited = data.visited
  }
}