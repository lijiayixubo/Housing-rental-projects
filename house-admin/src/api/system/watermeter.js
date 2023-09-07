import request from '@/utils/request'

// 查询水列表
export function listWatermeter(query) {
  return request({
    url: '/system/watermeter/list',
    method: 'get',
    params: query
  })
}

// 查询水详细
export function getWatermeter(id) {
  return request({
    url: '/system/watermeter/' + id,
    method: 'get'
  })
}

// 新增水
export function addWatermeter(data) {
  return request({
    url: '/system/watermeter',
    method: 'post',
    data: data
  })
}

// 修改水
export function updateWatermeter(data) {
  return request({
    url: '/system/watermeter',
    method: 'put',
    data: data
  })
}

// 删除水
export function delWatermeter(id) {
  return request({
    url: '/system/watermeter/' + id,
    method: 'delete'
  })
}
