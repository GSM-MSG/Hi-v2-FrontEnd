import * as S from './style'
import * as SVG from '@/assets/svg'
import Button from '@/components/common/Button'
import useModal from '@/hooks/useModal'
import useDeleteReservationStatus from '@/hooks/useDeleteReservationStatus'
import { useRouter } from 'next/navigation'

export default function Completed({ isModify }: { isModify: boolean }) {
  const { closeModal } = useModal()
  const { delReserveStatus } = useDeleteReservationStatus()

  const router = useRouter()

  return (
    <S.CompletedContainer>
      <S.ShowComplted>
        <SVG.CompletedImg />
        <h2>{isModify ? '수정이' : '예약이'} 완료되었습니다.</h2>
      </S.ShowComplted>
      <S.ButtonContainer>
        <Button
          width='100%'
          height='3rem'
          background='#0066ff'
          color='#ffffff'
          fontSize='1rem'
          fontWeight='500'
          border='none'
          borderRadius='8px'
          onClick={async () => {
            closeModal()
            delReserveStatus()
            router.refresh()
          }}
        >
          확인
        </Button>
      </S.ButtonContainer>
    </S.CompletedContainer>
  )
}
