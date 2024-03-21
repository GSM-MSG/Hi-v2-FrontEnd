import { del, homebaseQueryKeys, reservationQueryKeys, reservationUrl } from '@/apis'
import {
  Button,
  ButtonContainer,
  CheckModalContainer,
  Portal,
} from '@/components'
import { useModal } from '@/hooks'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import ViewReservationModal from '../ViewReservationModal'

export default function LeaveReservationTableModal({
  reservationId,
  reservationNumber,
}: {
  reservationId: string | undefined
  reservationNumber: number | undefined
}) {
  const { openModal, closeModal } = useModal()
  const { refetch } = useQuery({
    queryKey: homebaseQueryKeys.list(),
  })
  const { mutate } = useMutation<void, Error>({
    mutationKey: reservationQueryKeys.exit(reservationId),
    mutationFn: () => del(reservationUrl.exit(reservationId)),
    onSuccess: () => {
      toast.success('예약테이블을 나갔습니다')
      refetch()
      closeModal()
    },
  })

  return (
    <Portal onClose={closeModal}>
      <CheckModalContainer style={{ height: '180px' }}>
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
            onClick={() => mutate()}
          >
            나가기
          </Button>
        </ButtonContainer>
      </CheckModalContainer>
    </Portal>
  )
}
