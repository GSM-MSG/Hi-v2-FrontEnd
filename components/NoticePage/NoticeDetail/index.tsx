import { Button, PageContainer } from '@/components'
import { useFetch, useGetRole } from '@/hooks'
import { NoticeDetailType } from '@/types'
import { dateToString } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from './style'
import { BackArrowIcon } from '@/assets'

export default function NoticeDetailPage() {
  const router = useRouter()
  const id = router.query.id

  const { fetch, data } = useFetch<NoticeDetailType>({
    url: `/notice/${id}`,
    method: 'get',
  })

  const { isAdmin, isTeacher } = useGetRole()

  useEffect(() => {
    ;(async () => await fetch())()
  }, [router, fetch])

  const onModify = () => {
    if (data) {
      router.push(
        {
          pathname: '/notice/write',
          query: { id, title: data.title, content: data.content },
        },
        'write'
      )
    }
  }

  if (!data) return <></>

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
            <S.DetailTitle>{data.title}</S.DetailTitle>
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
            <div>작성일 : {dateToString(data.createdAt)}</div>
            <div>작성자 : {data.user.name}</div>
          </S.DetailInfo>
          <S.DetailContent>{data.content}</S.DetailContent>
        </S.DetailWrapper>
      </S.DetailContainer>
    </PageContainer>
  )
}
