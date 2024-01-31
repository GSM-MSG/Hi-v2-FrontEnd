import { BASE_URL } from '@/utils'
import axios, { InternalAxiosRequestConfig } from 'axios'
import TokenManager from './TokenManager'

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

API.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const tokenManager = new TokenManager()
  const accessTokenIsValid = tokenManager.validateToken(
    tokenManager.accessExpiredAt,
    tokenManager.accessToken
  )
  const refreshTokenIsValid = tokenManager.validateToken(
    tokenManager.refreshExpiredAt,
    tokenManager.refreshToken
  )

  if (!accessTokenIsValid && refreshTokenIsValid) {
    await tokenManager.reissueToken({ refreshToken: tokenManager.refreshToken })
    tokenManager.initToken()
  } else if (!accessTokenIsValid && !refreshTokenIsValid)
    tokenManager.removeTokens()

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined

  return config
})

export default API
