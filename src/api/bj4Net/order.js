import request from '@/utils/request'

// 查询bj4动漫屋-订单信息列表
export function listOrder(query) {
  return request({
    url: '/bj4Net/order/list',
    method: 'get',
    params: query
  })
}

// 查询bj4动漫屋-订单信息详细
export function getOrder(id) {
  return request({
    url: '/bj4Net/order/' + id,
    method: 'get'
  })
}

// 新增bj4动漫屋-订单信息
export function addOrder(data) {
  return request({
    url: '/bj4Net/order',
    method: 'post',
    data: data
  })
}

// 修改bj4动漫屋-订单信息
export function updateOrder(data) {
  return request({
    url: '/bj4Net/order',
    method: 'put',
    data: data
  })
}

// 删除bj4动漫屋-订单信息
export function delOrder(id) {
  return request({
    url: '/bj4Net/order/' + id,
    method: 'delete'
  })
}

// 导出bj4动漫屋-订单信息
export function exportOrder(query) {
  return request({
    url: '/bj4Net/order/export',
    method: 'get',
    params: query
  })
}