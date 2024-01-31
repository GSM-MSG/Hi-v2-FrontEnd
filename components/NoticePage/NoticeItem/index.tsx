import * as S from './style'
import { NoticeItemType } from '@/types'
import { dateToString } from '@/utils'
import { useFetch } from '@/hooks'
import { useRouter } from 'next/router'
import { XMark } from '@/assets'

export default function NoticeItem({
  index,
  noticeId,
  title,
  createdAt,
  user,
  noticeList,
  role,
}: NoticeItemType) {
  const { fetch } = useFetch({
    url: `/notice/${noticeId}`,
    method: 'delete',
    successMessage: '공지가 삭제되었습니다.',
    errorMessage: { 403: '권한이 없습니다.', 404: '존재하지 않는 글입니다.' },
  })

  const onDelete = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await fetch()
    await noticeList()
  }

  const router = useRouter()

  return (
    <S.NoticeItemContainer onClick={() => router.push(`/notice/${noticeId}`)}>
      <S.NoticeItemWrapper>
        <S.NoticeIDXContainer>
          <S.NoticeIDX>{index}</S.NoticeIDX>
        </S.NoticeIDXContainer>
        <S.NoticeTitle>{title}</S.NoticeTitle>
        <S.NoticeDate>{dateToString(createdAt)}</S.NoticeDate>
        <S.NoticeUser>{user.name}</S.NoticeUser>
        {(role.isAdmin || role.isTeacher) && (
          <S.SVG onClick={onDelete}>
            <XMark />
          </S.SVG>
        )}
      </S.NoticeItemWrapper>
    </S.NoticeItemContainer>
  )
}
