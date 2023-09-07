import request from '@/utils/request'

// 查询电费列表
export function listElectric(query) {
  return request({
    url: '/system/electric/list',
    method: 'get',
    params: query
  })
}

// 查询电费详细
export function getElectric(id) {
  return request({
    url: '/system/electric/' + id,
    method: 'get'
  })
}

// 新增电费
export function addElectric(data) {
  return request({
    url: '/system/electric',
    method: 'post',
    data: data
  })
}

// 修改电费
export function updateElectric(data) {
  return request({
    url: '/system/electric',
    method: 'put',
    data: data
  })
}

// 删除电费
export function delElectric(id) {
  return request({
    url: '/system/electric/' + id,
    method: 'delete'
  })
}
