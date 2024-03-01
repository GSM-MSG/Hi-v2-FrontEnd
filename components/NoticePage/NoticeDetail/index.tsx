import { Button, PageContainer } from '@/components'
import { NoticeDetailType } from '@/types'
import { dateToString } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import { BackArrowIcon } from '@/assets'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { get, noticeQueryKeys, noticeUrl } from '@/apis'
import { useGetRole } from '@/hooks'

export default function NoticeDetailPage() {
  const router = useRouter()
  const id = String(router.query.id)

  const { data } = useQuery<AxiosResponse<NoticeDetailType>>({
    queryKey: noticeQueryKeys.detail(id),
    queryFn: () => get(noticeUrl.requestId(id)),
  })

  const { isAdmin, isTeacher } = useGetRole()

  const { title, content, createdAt, user } = data?.data || {}

  const onModify = () => {
    if (data) {
      router.push(
        {
          pathname: '/notice/write',
          query: { id, title: title, content: content },
        },
        'write'
      )
    }
  }

  return (
    <PageContainer
      background='#F5F5F5'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <S.DetailContainer>
        <Link href='/notice'>
          <BackArrowIcon />
        </Link>
        <S.DetailWrapper>
          <S.DetailTitleContainer>
            <S.DetailTitle>{title}</S.DetailTitle>
            {(isAdmin || isTeacher) && (
              <Button
                width='48px'
                height='26px'
                border='none'
                borderRadius='16px'
                color='#9E9E9E'
                background='#F5F5F5'
                onClick={onModify}
              >
                수정
              </Button>
            )}
          </S.DetailTitleContainer>
          <S.DetailInfo>
            <div>작성일 : {dateToString(createdAt ?? '')}</div>
            <div>작성자 : {user && user.name}</div>
          </S.DetailInfo>
          <S.DetailContent>{content}</S.DetailContent>
        </S.DetailWrapper>
      </S.DetailContainer>
    </PageContainer>
  )
}
