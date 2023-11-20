import { BASE_URL } from '@/utils/env'
import axios from 'axios'
import TokenManager from './TokenManager'
import { getStorage } from '@/utils/Storage'

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
})
API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()

  if (
    !tokenManager.validateToken(
      tokenManager.accessExpiredAt,
      tokenManager.accessToken
    ) &&
    tokenManager.validateToken(
      tokenManager.refreshExpiredAt,
      tokenManager.refreshToken
    )
  ) {
    tokenManager.reissueToken()
  } else if (
    !tokenManager.validateToken(
      tokenManager.accessExpiredAt,
      tokenManager.accessToken
    ) &&
    !tokenManager.validateToken(
      tokenManager.refreshExpiredAt,
      tokenManager.refreshToken
    )
  )
    tokenManager.removeTokens()

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined

  return config
})

export default API
