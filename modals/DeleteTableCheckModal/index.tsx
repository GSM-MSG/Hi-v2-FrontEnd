import {
  del,
  homebaseQueryKeys,
  reservationQueryKeys,
  reservationUrl
} from '@/apis'
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

export default function DeleteTableCheckModal({
  reservationId,
}: {
  reservationId: string | undefined
}) {
  const { openModal, closeModal } = useModal()
  const { refetch } = useQuery({
    queryKey: homebaseQueryKeys.list(),
  })
  const { mutate } = useMutation<void, Error>({
    mutationKey: reservationQueryKeys.delete(reservationId),
    mutationFn: () => del(reservationUrl.requestId(reservationId)),
    onSuccess: () => {
      toast.success('예약 테이블을 삭제했습니다')
      closeModal()
      refetch()
    },
  })

  return (
    <Portal onClose={closeModal}>
      <CheckModalContainer>
        <h2>테이블 삭제</h2>
        <p>
          삭제하면 오늘 하루동안 예약이 불가합니다. <br />
          정말로 예약을 삭제하시겠습니까?
        </p>
        <ButtonContainer>
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
            확인
          </Button>
        </ButtonContainer>
      </CheckModalContainer>
    </Portal>
  )
}
