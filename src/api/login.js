import request from '@/utils/request'

// 登录方法
export function login(username, password, captcha, uuid) {
  const data = {
    username,
    password,
    captcha,
    uuid
  }
  return request({
    url: '/sys/login',
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/sys/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/sys/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg(uuid) {
  return request({
    url: '/captcha.jpg?uuid=' + uuid,
    method: 'get'
  })
}
