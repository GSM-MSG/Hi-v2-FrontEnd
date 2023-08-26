import Link from 'next/link'
import * as S from './style'
import { NoticeItemType } from '@/types/NoticeItemType'
import { dateToString } from '@/utils/formatter'

export default function NoticeItem({
  noticeId,
  title,
  createdAt,
  user,
}: NoticeItemType) {
  return (
    <Link href='/notice/detail'>
      <S.NoticeItemContainer>
        <S.NoticeIdContainer></S.NoticeIdContainer>
        <S.NoticeTitle>{title}</S.NoticeTitle>
        <S.NoticeDate>{dateToString(createdAt)}</S.NoticeDate>
        <S.NoticeUser>{user.name}</S.NoticeUser>
      </S.NoticeItemContainer>
    </Link>
  )
}
