import * as S from './style'
import * as SVG from '@/assets/svg'
import Button from '@/components/Common/Button'
import { useSetRecoilState } from 'recoil'
import { IsRModal, ModalPage } from '@/atoms/atom'

export default function Completed() {
  const setIsRModal = useSetRecoilState(IsRModal)
  const setModalPage = useSetRecoilState(ModalPage)
  return (
    <S.CompletedContainer>
      <S.ShowComplted>
        <SVG.CompletedImg />
        <h2>예약이 완료되었습니다.</h2>
      </S.ShowComplted>
      <Button
        width='100%'
        height='3rem'
        background='#0066ff'
        color='#ffffff'
        fontSize='1rem'
        fontWeight='500'
        border='none'
        borderRadius='8px'
        onClick={() => setModalPage(2)}
      >
        확인
      </Button>
    </S.CompletedContainer>
  )
}
