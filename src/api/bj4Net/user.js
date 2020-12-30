import request from '@/utils/request'

// 查询bj4动漫屋-购买用户信息列表
export function listUser(query) {
  return request({
    url: '/bj4Net/user/list',
    method: 'get',
    params: query
  })
}

// 查询bj4动漫屋-购买用户信息详细
export function getUser(id) {
  return request({
    url: '/bj4Net/user/' + id,
    method: 'get'
  })
}

// 新增bj4动漫屋-购买用户信息
export function addUser(data) {
  return request({
    url: '/bj4Net/user',
    method: 'post',
    data: data
  })
}

// 修改bj4动漫屋-购买用户信息
export function updateUser(data) {
  return request({
    url: '/bj4Net/user',
    method: 'put',
    data: data
  })
}

// 删除bj4动漫屋-购买用户信息
export function delUser(id) {
  return request({
    url: '/bj4Net/user/' + id,
    method: 'delete'
  })
}

// 导出bj4动漫屋-购买用户信息
export function exportUser(query) {
  return request({
    url: '/bj4Net/user/export',
    method: 'get',
    params: query
  })
}