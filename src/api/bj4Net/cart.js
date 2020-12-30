import request from '@/utils/request'

// 查询bj4动漫屋-购车信息列表
export function listCart(query) {
  return request({
    url: '/bj4Net/cart/list',
    method: 'get',
    params: query
  })
}

// 查询bj4动漫屋-购车信息详细
export function getCart(id) {
  return request({
    url: '/bj4Net/cart/' + id,
    method: 'get'
  })
}

// 新增bj4动漫屋-购车信息
export function addCart(data) {
  return request({
    url: '/bj4Net/cart',
    method: 'post',
    data: data
  })
}

// 修改bj4动漫屋-购车信息
export function updateCart(data) {
  return request({
    url: '/bj4Net/cart',
    method: 'put',
    data: data
  })
}

// 删除bj4动漫屋-购车信息
export function delCart(id) {
  return request({
    url: '/bj4Net/cart/' + id,
    method: 'delete'
  })
}

// 导出bj4动漫屋-购车信息
export function exportCart(query) {
  return request({
    url: '/bj4Net/cart/export',
    method: 'get',
    params: query
  })
}