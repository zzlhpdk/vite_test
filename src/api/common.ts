// 公共接口封装
import request from '@/utils/request'

export const login = () => {
  return request<{ data: any }>({
    method: 'get',
    url: '/sino-auth/oauth/token/test',
  })
}
