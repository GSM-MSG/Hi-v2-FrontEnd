export interface NoticeDetailType {
  noticeId: string
  title: string
  content: string
  createdAt: string
  user: {
    userId: string
    name: string
    grade: number
    classNum: number
    number: number
  }
}
