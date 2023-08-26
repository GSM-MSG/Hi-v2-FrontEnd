export interface NoticeItemType {
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
}
