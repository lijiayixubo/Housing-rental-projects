import request from '@/utils/request'

// 查询合同列表
export function listAgreement(query) {
  return request({
    url: '/system/agreement/list',
    method: 'get',
    params: query
  })
}

// 查询合同详细
export function getAgreement(id) {
  return request({
    url: '/system/agreement/' + id,
    method: 'get'
  })
}

// 新增合同
export function addAgreement(data) {
  return request({
    url: '/system/agreement',
    method: 'post',
    data: data
  })
}

// 修改合同
export function updateAgreement(data) {
  return request({
    url: '/system/agreement',
    method: 'put',
    data: data
  })
}

// 删除合同
export function delAgreement(id) {
  return request({
    url: '/system/agreement/' + id,
    method: 'delete'
  })
}
