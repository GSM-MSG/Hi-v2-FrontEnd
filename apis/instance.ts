import axios, { InternalAxiosRequestConfig } from 'axios'
import TokenManager from './TokenManager'
import Router from 'next/router'
import { toast } from 'react-toastify'

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
    return res.data
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
        tokenManager.removeTokens()
        toast.error('알 수 없는 에러가 발생했습니다.')
        Router.push('/')
      }
    }
    return Promise.reject(error)
  }
)

export default API
