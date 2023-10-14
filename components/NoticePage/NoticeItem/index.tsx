import Link from 'next/link'
import * as S from './style'
import { NoticeItemType } from '@/types/NoticeItemType'
import { dateToString } from '@/utils/formatter'
import * as SVG from '@/assets/svg'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'
import { useEffect } from 'react'

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
    successMessage: '공지가 삭제되었습니다.',
    errorMessage: { 403: '권한이 없습니다.', 404: '존재하지 않는 글입니다.' },
  })

  const { fetch: getRoleTypes, data } = useFetch<GetRoleTypes>({
    url: 'user/my-role',
    method: 'get',
  })

  useEffect(() => {
    ;(async () => await getRoleTypes())()
  }, [getRoleTypes])

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
        {data?.role.includes('ROLE_ADMIN' || 'ROLE_TEACHER') && (
          <S.SVG onClick={onDelete}>
            <SVG.XMark />
          </S.SVG>
        )}
      </S.NoticeItemWrapper>
    </S.NoticeItemContainer>
  )
}
