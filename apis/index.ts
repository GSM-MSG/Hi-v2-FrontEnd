import { BASE_URL } from '@/utils/env'
import axios, { InternalAxiosRequestConfig } from 'axios'
import TokenManager from './TokenManager'

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

API.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
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
    await tokenManager.reissueToken({ refreshToken: tokenManager.refreshToken })
    tokenManager.initToken()
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
