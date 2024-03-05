import {
  Button,
  ButtonContainer,
  CheckModalContainer,
  Portal,
} from '@/components'
import { useModal } from '@/hooks'
import ReservationModal from '../ReservationModal'

export default function ConfirmReservationModal({
  reservationNumber,
}: {
  reservationNumber: number
}) {
  const { openModal, closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <CheckModalContainer style={{ height: '180px' }}>
        <h2>예약확인</h2>
        <p>{reservationNumber}번 테이블을 예약하시겠습니까?</p>
        <ButtonContainer style={{ marginTop: '2rem' }}>
          <Button
            width='142px'
            height='2.7rem'
            background='none'
            color='#c0c0c0'
            fontSize='1rem'
            fontWeight='500'
            border='1px solid #c0c0c0'
            borderRadius='8px'
            style={{
              marginRight: '0.4rem',
            }}
            onClick={closeModal}
          >
            취소
          </Button>
          <Button
            width='142px'
            height='2.7rem'
            background='#0066ff'
            color='#ffffff'
            fontSize='1rem'
            fontWeight='500'
            border='none'
            borderRadius='8px'
            onClick={() =>
              openModal(
                <ReservationModal
                  reservationNumber={reservationNumber}
                  isModify={false}
                />
              )
            }
          >
            확인
          </Button>
        </ButtonContainer>
      </CheckModalContainer>
    </Portal>
  )
}
