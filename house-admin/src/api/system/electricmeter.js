import request from '@/utils/request'

// 查询电列表
export function listElectricmeter(query) {
  return request({
    url: '/system/electricmeter/list',
    method: 'get',
    params: query
  })
}

// 查询电详细
export function getElectricmeter(id) {
  return request({
    url: '/system/electricmeter/' + id,
    method: 'get'
  })
}

// 新增电
export function addElectricmeter(data) {
  return request({
    url: '/system/electricmeter',
    method: 'post',
    data: data
  })
}

// 修改电
export function updateElectricmeter(data) {
  return request({
    url: '/system/electricmeter',
    method: 'put',
    data: data
  })
}

// 删除电
export function delElectricmeter(id) {
  return request({
    url: '/system/electricmeter/' + id,
    method: 'delete'
  })
}
