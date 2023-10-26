import Button from '../common/Button'
import NoticeItemList from './NoticeItemList'
import * as S from './style'
import * as SVG from '../../assets/svg'
import Link from 'next/link'
import PageContainer from '@/components/common/PageContainer'
import useGetRole from '@/hooks/useGetRole'

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
              <SVG.NoticeWrite />
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
