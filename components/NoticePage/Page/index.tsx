import { NoticeWrite } from '@/assets'
import { Button, PageContainer } from '@/components'
import { useGetRole } from '@/hooks'
import Link from 'next/link'
import NoticeItemList from '../NoticeItemList'
import * as S from './style'

function NoticePage() {
  const { isAdmin, isTeacher } = useGetRole()

  return (
    <PageContainer paddingTop='4vh' paddingBottom='4vh' background='#f5f5f5'>
      <S.NoticeTitleContainer>
        <h1>공지사항</h1>
        <Link href='notice/write'>
          {(isAdmin || isTeacher) && (
            <Button
              width='80px'
              height='4vh'
              border='1px solid #0066FF'
              fontSize='14px'
              color='#0066FF'
              borderRadius='8px'
            >
              <NoticeWrite />
              글작성
            </Button>
          )}
        </Link>
      </S.NoticeTitleContainer>
      <NoticeItemList />
    </PageContainer>
  )
}

export default NoticePage