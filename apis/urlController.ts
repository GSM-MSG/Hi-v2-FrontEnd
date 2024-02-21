import { reservationIdsType } from '@/types'

export const authUrl = {
  auth: () => `auth`,
} as const

export const userUrl = {
  user: () => `/user`,
  my: () => `/user/my-page`,
  all: () => `/user/all`,
  requestId: (userId: string) => `/user/${userId}`,
  search: () => `/user/search`,
  searchStudent: () => `/user/search-student`,
  userRole: (userId: string) => `/user/${userId}/role`,
  myRole: () => `/user/my-role`,
} as const

export const homebaseUrl = {
  hombase: () => `/homebase`,
} as const

export const reservationUrl = {
  requestId: (reservationId: string) => `/reservation/${reservationId}`,
  delegate: (ids: reservationIdsType) =>
    `/reservation/${ids.reservationId}/${ids.userId}`,
  exit: (reservationId: string) => `/reservation/${reservationId}/exit`,
  check: (reservationId: string) =>
    `/reservation/${reservationId}/check-status`,
  deleteAll: () => `/reservation/kill-all`,
} as const

export const noticeUrl = {
  notice: () => `/notice`,
  requestId: (noticeId: string) => `/notice/${noticeId}`,
}
