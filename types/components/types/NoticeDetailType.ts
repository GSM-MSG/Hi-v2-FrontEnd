export interface NoticeDetailType {
  noticeId: string
  title: string
  content: string
  createdAt: string
  user: {
    name: string
    isWriter: boolean
  }
}
