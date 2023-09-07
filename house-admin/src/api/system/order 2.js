import request from '@/utils/request'

// 查询账单列表
export function listOrder(query) {
  return request({
    url: '/system/order/list',
    method: 'get',
    params: query
  })
}

// 查询账单详细
export function getOrder(id) {
  return request({
    url: '/system/order/' + id,
    method: 'get'
  })
}

// 新增账单
export function addOrder(data) {
  return request({
    url: '/system/order',
    method: 'post',
    data: data
  })
}

// 修改账单
export function updateOrder(data) {
  return request({
    url: '/system/order',
    method: 'put',
    data: data
  })
}

// 删除账单
export function delOrder(id) {
  return request({
    url: '/system/order/' + id,
    method: 'delete'
  })
}
