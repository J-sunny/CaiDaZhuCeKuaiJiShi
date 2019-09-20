import Cookies from 'js-cookie'

const TokenKey = 'X-Token'

export function getToken(val) {
  return Cookies.get(val||TokenKey)
}

export function setToken(token,val) {
  return Cookies.set(val||TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
