import { get, noticeQueryKeys, noticeUrl } from '@/apis'
import { BackArrowIcon } from '@/assets'
import { Button, PageContainer } from '@/components'
import { NoticeDetailType } from '@/types'
import { dateToString } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'

export default function NoticeDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const { data } = useQuery<NoticeDetailType, AxiosError>({
    queryKey: noticeQueryKeys.detail(id + ''),
    queryFn: () => get(noticeUrl.requestId(id + '')),
    enabled: typeof id === 'string',
  })
  const { title, content, createdAt, user } = data || {}
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
            {user?.isWriter && (
              <Button
                width='45px'
                height='24px'
                border='none'
                fontSize='12px'
                fontWeight='500'
                lineHeight='20px'
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
            <div>작성자 : {user?.name}</div>
          </S.DetailInfo>
          <S.DetailContent>{content}</S.DetailContent>
        </S.DetailWrapper>
      </S.DetailContainer>
    </PageContainer>
  )
}
