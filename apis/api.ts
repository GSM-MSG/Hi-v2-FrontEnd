import { BASE_URL } from '@/utils/env'
import axios, { AxiosError, AxiosResponse } from 'axios'
import TokenManager from './TokenManager'

const API = axios.create({
  baseURL: BASE_URL,
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
    tokenManager.reissueToken({ refreshToken: tokenManager.refreshToken })
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

API.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  async (err: AxiosError) => {
    const tokenManager = new TokenManager()

    if (err.response && err.response.status === 401) {
      return tokenManager.reissueToken({
        refreshToken: tokenManager.refreshToken,
      })
    }
    return Promise.reject(err)
  }
)

export default API
