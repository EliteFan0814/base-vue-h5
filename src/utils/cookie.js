import Cookies from 'js-cookie'
import tokenName from '@/setting'
// alert(tokenName)
// 获取 token
export function getToken() {
  return Cookies.remove(tokenName)
}
// 获取某个 cookie
export function getCookie(key) {
  return Cookies.get(key)
}

export function setCookie(key, value, expires = 7) {
  return Cookies.set(key, value, { expires })
}

export function removeCookie(key) {
  return Cookies.remove(key)
}
