import request from '@/utils/request'

// 查询bj4动漫屋-分类信息列表
export function listClassificationInfo(query) {
  return request({
    url: '/bj4Net/classificationInfo/list',
    method: 'get',
    params: query
  })
}

// 查询bj4动漫屋-分类信息详细
export function getClassificationInfo(id) {
  return request({
    url: '/bj4Net/classificationInfo/' + id,
    method: 'get'
  })
}

// 新增bj4动漫屋-分类信息
export function addClassificationInfo(data) {
  return request({
    url: '/bj4Net/classificationInfo',
    method: 'post',
    data: data
  })
}

// 修改bj4动漫屋-分类信息
export function updateClassificationInfo(data) {
  return request({
    url: '/bj4Net/classificationInfo',
    method: 'put',
    data: data
  })
}

// 删除bj4动漫屋-分类信息
export function delClassificationInfo(id) {
  return request({
    url: '/bj4Net/classificationInfo/' + id,
    method: 'delete'
  })
}

// 导出bj4动漫屋-分类信息
export function exportClassificationInfo(query) {
  return request({
    url: '/bj4Net/classificationInfo/export',
    method: 'get',
    params: query
  })
}

// 导出bj4动漫屋-分类信息
export function getShowClassificationInfoList(query) {
  return request({
    url: '/bj4Net/classificationInfo/getShowList',
    method: 'get',
    params: query
  })
}
