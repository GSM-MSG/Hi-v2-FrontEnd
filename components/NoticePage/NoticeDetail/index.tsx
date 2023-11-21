import * as S from './style'
import { PageContainer, Button } from '@/components/commons'
import * as SVG from '../../../assets/svg'
import Link from 'next/link'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NoticeDetailType } from '@/types/NoticeDetailType'
import { dateToString } from '@/utils/formatter'
import useGetRole from '@/hooks/useGetRole'

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

  if (!data) return <div />

  return (
    <PageContainer
      background='#F5F5F5'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <S.DetailContainer>
        <Link href='/notice'>
          <SVG.BackArrowIcon />
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
