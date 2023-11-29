import { TokensType } from '@/types/apis'
import { getStorage, removeStorage, setStorage } from '@/utils/Storage'
import { BASE_URL } from '@/utils/env'
import axios from 'axios'
import Router from 'next/router'
import {
  accessTokenStorage,
  refreshTokenStorage,
  accessExpiredAtStorage,
  refreshExpiredAtStorage,
} from '@/types/apis'

class TokenManager {
  private _accessToken: string | null = null
  private _refreshToken: string | null = null
  private _accessExpiredAt: string | null = null
  private _refreshExpiredAt: string | null = null

  constructor() {
    this.initToken()
  }

  validateToken(expiredString: string | null, token: string | null): boolean {
    if (!expiredString || !token) return false

    return this.calculateMinutes(expiredString, 1) >= new Date()
  }

  calculateMinutes(currentDate: string, addMinute: number): Date {
    const expiredAt = currentDate ? new Date(currentDate) : new Date()
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute)

    return expiredAt
  }

  initToken() {
    if (typeof window === 'undefined') return
    this._accessToken = getStorage(accessTokenStorage)
    this._refreshToken = getStorage(refreshTokenStorage)
    this._accessExpiredAt = getStorage(accessExpiredAtStorage)
    this._refreshExpiredAt = getStorage(refreshExpiredAtStorage)
  }

  setTokens(tokens: TokensType) {
    this._accessToken = tokens.accessToken
    this._refreshToken = tokens.refreshToken
    this._accessExpiredAt = tokens.accessExpiredAt
    this._refreshExpiredAt = tokens.refreshExpiredAt

    setStorage(accessTokenStorage, tokens.accessToken)
    setStorage(refreshTokenStorage, tokens.refreshToken)
    setStorage(accessExpiredAtStorage, tokens.accessExpiredAt)
    setStorage(refreshExpiredAtStorage, tokens.refreshExpiredAt)
  }

  removeTokens() {
    if (typeof window === 'undefined') return
    this._accessToken = null
    this._refreshToken = null
    this._accessExpiredAt = null
    this._refreshExpiredAt = null

    removeStorage(accessTokenStorage)
    removeStorage(refreshTokenStorage)
    removeStorage(accessExpiredAtStorage)
    removeStorage(refreshExpiredAtStorage)
  }

  async reissueToken({ refreshToken }: { refreshToken: string | null }) {
    try {
      const { data } = await axios.patch(
        '/auth',
        {},
        {
          baseURL: BASE_URL,
          withCredentials: true,
          headers: {
            RefreshToken: this.refreshToken && `Bearer ${refreshToken}`,
          },
        }
      )

      this.setTokens(data)

      return true
    } catch (error) {
      this.removeTokens()
      Router.push('/')
      return false
    }
  }

  get accessToken() {
    return this._accessToken
  }

  get refreshToken() {
    return this._refreshToken
  }

  get accessExpiredAt() {
    return this._accessExpiredAt
  }

  get refreshExpiredAt() {
    return this._refreshExpiredAt
  }
}

export default TokenManager
