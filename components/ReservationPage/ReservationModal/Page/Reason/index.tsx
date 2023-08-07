import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/Common/Modal/Title'
import { Textarea } from '@/components/Common/Textarea'
import * as S from './style'
import { Button } from '@/components/Common/Modal/Button'

function Reason() {
  return (
    <S.ReasonContainer>
      <TitleBox>
        <Title>예약사유</Title>
        <PageToggleBox>
          <div></div>
          <div className='currentToggle'></div>
        </PageToggleBox>
      </TitleBox>
      <SubTitle>홈베이스를 신청하는 사유를 알려주세요.</SubTitle>
      <Textarea height={290} placeholder='예약 사유를 입력해주세요.' />
      <Button>예약하기</Button>
    </S.ReasonContainer>
  )
}

export default Reason
