import NoticeItemList from '../NoticeItemList'
import * as S from './style'

function NoticePage() {
  return (
    <S.NoticePageContainer>
      <h1>공지사항</h1>
      <NoticeItemList />
    </S.NoticePageContainer>
  )
}

export default NoticePage
