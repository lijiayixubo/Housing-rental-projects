import request from '@/utils/request'

// 查询锁单列表
export function listLock(query) {
  return request({
    url: '/system/lock/list',
    method: 'get',
    params: query
  })
}

// 查询锁单详细
export function getLock(id) {
  return request({
    url: '/system/lock/' + id,
    method: 'get'
  })
}

// 新增锁单
export function addLock(data) {
  return request({
    url: '/system/lock',
    method: 'post',
    data: data
  })
}

// 修改锁单
export function updateLock(data) {
  return request({
    url: '/system/lock',
    method: 'put',
    data: data
  })
}

// 删除锁单
export function delLock(id) {
  return request({
    url: '/system/lock/' + id,
    method: 'delete'
  })
}
