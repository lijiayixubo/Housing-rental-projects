import request from '@/utils/request'

// 查询租金列表
export function listRent(query) {
  return request({
    url: '/system/rent/list',
    method: 'get',
    params: query
  })
}

// 查询租金详细
export function getRent(id) {
  return request({
    url: '/system/rent/' + id,
    method: 'get'
  })
}

// 新增租金
export function addRent(data) {
  return request({
    url: '/system/rent',
    method: 'post',
    data: data
  })
}

// 修改租金
export function updateRent(data) {
  return request({
    url: '/system/rent',
    method: 'put',
    data: data
  })
}

// 删除租金
export function delRent(id) {
  return request({
    url: '/system/rent/' + id,
    method: 'delete'
  })
}
