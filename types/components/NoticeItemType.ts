export interface NoticeItemType {
  index: number
  noticeNum?: number
  noticeId: string
  title: string
  createdAt: string
  userId: string
  user: {
    userId: string
    name: string
    grade: number
    classNum: number
    number: number
  }
}
