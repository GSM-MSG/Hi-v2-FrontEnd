import { BASE_URL } from '@/utils/env'
import axios from 'axios'

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
})

export default API
