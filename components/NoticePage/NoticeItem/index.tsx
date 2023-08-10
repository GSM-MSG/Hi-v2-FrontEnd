import * as S from './style'
import { NoticeItemType } from '@/types/NoticeItemType'

export default function NoticeItem({
  noticeId,
  title,
  date,
  user,
}: NoticeItemType) {
  return (
    <S.NoticeItemContainer>
      <S.NoticeIdContainer>
        <S.NoticeID>{noticeId}</S.NoticeID>
      </S.NoticeIdContainer>
      <S.NoticeTitle>{title}</S.NoticeTitle>
      <S.NoticeDate>{date}</S.NoticeDate>
      <S.NoticeUser>{user}</S.NoticeUser>
    </S.NoticeItemContainer>
  )
}
