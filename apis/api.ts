import { getStorage } from '@/utils/Storage'
import { BASE_URL } from '@/utils/env'
import axios, { InternalAxiosRequestConfig } from 'axios'

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
})

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = getStorage('hi_accessToken')
  if (!accessToken) return config
  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

export default API
