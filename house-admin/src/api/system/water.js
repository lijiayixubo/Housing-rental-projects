import request from '@/utils/request'

// 查询水费列表
export function listWater(query) {
  return request({
    url: '/system/water/list',
    method: 'get',
    params: query
  })
}

// 查询水费详细
export function getWater(id) {
  return request({
    url: '/system/water/' + id,
    method: 'get'
  })
}

// 新增水费
export function addWater(data) {
  return request({
    url: '/system/water',
    method: 'post',
    data: data
  })
}

// 修改水费
export function updateWater(data) {
  return request({
    url: '/system/water',
    method: 'put',
    data: data
  })
}

// 删除水费
export function delWater(id) {
  return request({
    url: '/system/water/' + id,
    method: 'delete'
  })
}
