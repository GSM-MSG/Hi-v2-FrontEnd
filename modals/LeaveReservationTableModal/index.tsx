import { Button } from '@/components/commons'
import Portal from '@/components/Portal'
import useFetch from '@/hooks/useFetch'
import useModal from '@/hooks/useModal'
import { ButtonContainer } from '../DeleteTableCheckModal/style'
import ViewReservationModal from '../ViewReservationModal'
import * as S from './style'

export default function LeaveReservationTableModal({
  reservationId,
  reservationNumber,
}: {
  reservationId: string | undefined
  reservationNumber: number | undefined
}) {
  const { openModal, closeModal } = useModal()
  const { fetch } = useFetch({
    url: `/reservation/${reservationId}/exit`,
    method: 'delete',
    successMessage: '예약 테이블을 나갔습니다',
    onSuccess: () => {
      closeModal()
    },
  })

  return (
    <Portal onClose={closeModal}>
      <S.LeaveReservationTableContainer>
        <h2>테이블 나가기</h2>
        <p>정말로 {reservationNumber}번 테이블을 나가시겠습니까?</p>
        <ButtonContainer style={{ marginTop: '2rem' }}>
          <Button
            width='48%'
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
            onClick={() =>
              openModal(<ViewReservationModal reservationId={reservationId} />)
            }
          >
            취소
          </Button>
          <Button
            width='48%'
            height='2.7rem'
            background='#0066ff'
            color='#ffffff'
            fontSize='1rem'
            fontWeight='500'
            border='none'
            borderRadius='8px'
            onClick={async () => await fetch()}
          >
            확인
          </Button>
        </ButtonContainer>
      </S.LeaveReservationTableContainer>
    </Portal>
  )
}
