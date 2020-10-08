import {request} from './request'

// 调用获取博文列表接口
export function getArticleList(pageNum, userid) {
  let pageNumber = pageNum || null
  if(pageNumber == null) {
    return request({
      url: 'http://172.81.242.64/api/v1/articles/resources',
      method: 'get',
      params: {
        user_id: userid
      }
    })
  } else {
    return request({
      url: 'http://172.81.242.64/api/v1/articles/resources',
      method: 'get',
      params: {
        page: pageNumber,
        user_id: userid
      }
    })
  }
}

// 调用获取谋篇文章接口
export function getArticle(articleId) {
  return request({
    url: 'http://172.81.242.64/api/v1/articles',
    method: 'get',
    params: {
      id: articleId,
    }
  })
}