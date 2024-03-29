import { reservationIdsType } from '@/types'

export const authUrl = {
  auth: () => `auth`,
} as const

export const userUrl = {
  user: () => `/user`,
  my: () => `/user/my-page`,
  requestId: (userId: string) => `/user/${userId}`,
  searchUser: (keyword: string) => `/user/search?keyword=${keyword}`,
  searchStudent: (keyword: string) => `/user/search-student?keyword=${keyword}`,
  userRole: (userId: string) => `/user/${userId}/role`,
  myRole: () => `/user/my-role`,
} as const

export const homebaseUrl = {
  hombase: (queryString: { period: number; floor: number }) =>
    `/homebase?period=${queryString.period}&floor=${queryString.floor}`,
  hombaseReserve: (queryString: {
    period: number
    floor: number
    homeBaseNumber: number
  }) =>
    `/homebase?period=${queryString.period}&floor=${queryString.floor}&homeBaseNumber=${queryString.homeBaseNumber}`,
} as const

export const reservationUrl = {
  requestId: (reservationId: string | undefined) =>
    `/reservation/${reservationId}`,
  exit: (reservationId: string | undefined) =>
    `/reservation/${reservationId}/exit`,
  check: (reservationId: string | undefined) =>
    `/reservation/${reservationId}/check-status`,
  deleteAll: () => `/reservation/kill-all`,
} as const

export const noticeUrl = {
  notice: () => `/notice`,
  requestId: (noticeId: string) => `/notice/${noticeId}`,
}
