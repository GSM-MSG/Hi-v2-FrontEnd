import axios, { InternalAxiosRequestConfig } from 'axios'
import TokenManager from './TokenManager'
import { BASE_URL } from '@/utils'

const API = axios.create({
  baseURL: '/server',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
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
    ? `Bearer ${encodeURI(tokenManager.accessToken)}`
    : undefined
  return config
})

API.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    const tokenManager = new TokenManager()
    if (error.response.status === 401) {
      try {
        await tokenManager.reissueToken({
          refreshToken: tokenManager.refreshToken,
        })
        tokenManager.initToken()
        error.config.headers['Authorization'] = tokenManager.accessToken
          ? `Bearer ${encodeURI(tokenManager.accessToken)}`
          : undefined
        return API(error.config)
      } catch (err) {
        console.log(error)
      }
    }
    return Promise.reject(error)
  }
)

export default API