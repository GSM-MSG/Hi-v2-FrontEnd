import { useGetRoleReturnType } from './hooks/useGetRole'

export interface NoticeItemType {
  index: number
  noticeNum?: number
  noticeId: string
  title: string
  createdAt: string
  user: {
    userId: string
    name: string
    grade: number
    classNum: number
    number: number
  }
  noticeList: (body?: any) => Promise<void>
  role: useGetRoleReturnType
}
