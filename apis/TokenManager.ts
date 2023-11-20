import { TokensType } from '@/types/TokensType'
import { getStorage, removeStorage, setStorage } from '@/utils/Storage'
import { BASE_URL } from '@/utils/env'
import axios from 'axios'
import Router from 'next/router'

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
    this._accessToken = getStorage('hi_accessToken')
    this._refreshToken = getStorage('hi_refreshToken')
    this._accessExpiredAt = getStorage('hi_accessExpiredAt')
    this._refreshExpiredAt = getStorage('hi_refreshExpiredAt')
  }

  setTokens(tokens: TokensType) {
    this._accessToken = tokens.accessToken
    this._refreshToken = tokens.refreshToken
    this._accessExpiredAt = tokens.accessExpiredAt
    this._refreshExpiredAt = tokens.refreshExpiredAt

    setStorage('hi_accessToken', tokens.accessToken)
    setStorage('hi_refreshToken', tokens.refreshToken)
    setStorage('hi_accessExpiredAt', tokens.accessExpiredAt)
    setStorage('hi_refreshExpiredAt', tokens.refreshExpiredAt)
  }

  removeTokens() {
    if (typeof window === 'undefined') return
    this._accessToken = null
    this._refreshToken = null
    this._accessExpiredAt = null
    this._refreshExpiredAt = null

    removeStorage('hi_accessToken')
    removeStorage('hi_refreshToken')
    removeStorage('hi_accessExpiredAt')
    removeStorage('hi_refreshExpiredAt')
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

  async reissueToken() {
    const refreshToken = getStorage('hi_refreshToken')

    try {
      const { data } = await axios.patch(
        `${BASE_URL}auth`,
        {},
        {
          headers: {
            RefreshToken: `Bearer ${refreshToken}`,
          },
        }
      )

      this.setTokens(data)

      return true
    } catch (error) {
      this.removeTokens()
      await Router.push('/')

      return false
    }
  }
}

export default TokenManager
