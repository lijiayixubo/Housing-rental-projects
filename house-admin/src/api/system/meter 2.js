import request from '@/utils/request'

// 查询电列表
export function listMeter(query) {
  return request({
    url: '/system/meter/list',
    method: 'get',
    params: query
  })
}

// 查询电详细
export function getMeter(id) {
  return request({
    url: '/system/meter/' + id,
    method: 'get'
  })
}

// 新增电
export function addMeter(data) {
  return request({
    url: '/system/meter',
    method: 'post',
    data: data
  })
}

// 修改电
export function updateMeter(data) {
  return request({
    url: '/system/meter',
    method: 'put',
    data: data
  })
}

// 删除电
export function delMeter(id) {
  return request({
    url: '/system/meter/' + id,
    method: 'delete'
  })
}
