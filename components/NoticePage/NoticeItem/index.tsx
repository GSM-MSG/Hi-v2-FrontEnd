import Link from 'next/link'
import * as S from './style'
import { NoticeItemType } from '@/types/NoticeItemType'
import { dateToString } from '@/utils/formatter'
import * as SVG from '@/assets/svg'
import useFetch from '@/hooks/useFetch'

export default function NoticeItem({
  index,
  noticeId,
  title,
  createdAt,
  user,
  noticeList,
}: NoticeItemType) {
  const { fetch } = useFetch({
    url: `/notice/${noticeId}`,
    method: 'delete',
  })

  const onDelete = async (e: React.MouseEvent) => {
    e.preventDefault()
    await fetch()
    await noticeList()
  }

  return (
    <Link href='/notice/detail'>
      <S.NoticeItemContainer>
        <S.NoticeIDXContainer>
          <S.NoticeIDX>{index}</S.NoticeIDX>
        </S.NoticeIDXContainer>
        <S.NoticeTitle>{title}</S.NoticeTitle>
        <S.NoticeDate>{dateToString(createdAt)}</S.NoticeDate>
        <S.NoticeUser>{user.name}</S.NoticeUser>
        <S.SVG onClick={onDelete}>
          <SVG.XMark />
        </S.SVG>
      </S.NoticeItemContainer>
    </Link>
  )
}
