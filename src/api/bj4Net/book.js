import request from '@/utils/request'

// 查询bj4动漫屋-书籍详情信息列表
export function listBook(query) {
  return request({
    url: '/bj4Net/book/list',
    method: 'get',
    params: query
  })
}

// 查询bj4动漫屋-书籍详情信息详细
export function getBook(id) {
  return request({
    url: '/bj4Net/book/' + id,
    method: 'get'
  })
}

// 新增bj4动漫屋-书籍详情信息
export function addBook(data) {
  return request({
    url: '/bj4Net/book',
    method: 'post',
    data: data
  })
}

// 修改bj4动漫屋-书籍详情信息
export function updateBook(data) {
  return request({
    url: '/bj4Net/book',
    method: 'put',
    data: data
  })
}

// 删除bj4动漫屋-书籍详情信息
export function delBook(id) {
  return request({
    url: '/bj4Net/book/' + id,
    method: 'delete'
  })
}

// 导出bj4动漫屋-书籍详情信息
export function exportBook(query) {
  return request({
    url: '/bj4Net/book/export',
    method: 'get',
    params: query
  })
}