import { ModalPage } from '@/atoms/atom'
import Button from '@/components/Common/Button'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/Common/Modal/Title'
import Textarea from '@/components/Common/Textarea'
import { useSetRecoilState } from 'recoil'
import * as S from './style'

function Reason() {
  const setModalPage = useSetRecoilState(ModalPage)
  return (
    <S.ReasonContainer>
      <TitleBox>
        <Title>
          예약사유 <span />
        </Title>
        <PageToggleBox>
          <div></div>
          <div className='currentToggle'></div>
        </PageToggleBox>
      </TitleBox>
      <SubTitle>홈베이스를 신청하는 사유를 알려주세요.</SubTitle>
      <Textarea height='18rem' placeholder='예약 사유를 입력해주세요.' />
      <S.ButtonContainer>
        <Button
          width='30%'
          height='3rem'
          background='#d9d9d9'
          color='#ffffff'
          borderRadius='8px'
          border='none'
          onClick={() => setModalPage(1)}
        >
          돌아가기
        </Button>
        <Button
          width='68%'
          height='3rem'
          background='#0066ff'
          color='#ffffff'
          fontSize='1rem'
          fontWeight='500'
          border='none'
          borderRadius='8px'
          onClick={() => setModalPage(3)}
        >
          예약하기
        </Button>
      </S.ButtonContainer>
    </S.ReasonContainer>
  )
}

export default Reason
