import * as SVG from '@/assets/svg'
import Input from '../common/Input'
import PageContainer from '../common/PageContainer'
import * as S from './style'
import UserItemList from './UserItemList'

export default function UserPage() {
  return (
    <PageContainer paddingTop='6vh' paddingBottom='4vh'>
      <S.UserTitleContainer>
        <h1>학생정보</h1>
        <S.InputWrapper>
          <Input
            width='320px'
            height='28px'
            border='1px solid #B1B1B1'
            borderRadius='20px'
          />
          <SVG.SearchIcon />
        </S.InputWrapper>
      </S.UserTitleContainer>
      <UserItemList />
    </PageContainer>
  )
}
