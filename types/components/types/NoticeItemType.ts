export interface NoticeItemType {
  index: number
  noticeId: string
  title: string
  createdAt: string
  user: {
    name: string
    isWriter: boolean
  }
}
