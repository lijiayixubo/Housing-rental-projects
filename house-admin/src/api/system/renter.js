import request from '@/utils/request'

// 查询出租信息列表
export function listRenter(query) {
  return request({
    url: '/system/renter/list',
    method: 'get',
    params: query
  })
}

// 查询出租信息详细
export function getRenter(id) {
  return request({
    url: '/system/renter/' + id,
    method: 'get'
  })
}

// 新增出租信息
export function addRenter(data) {
  return request({
    url: '/system/renter',
    method: 'post',
    data: data
  })
}

// 修改出租信息
export function updateRenter(data) {
  return request({
    url: '/system/renter',
    method: 'put',
    data: data
  })
}

// 删除出租信息
export function delRenter(id) {
  return request({
    url: '/system/renter/' + id,
    method: 'delete'
  })
}
