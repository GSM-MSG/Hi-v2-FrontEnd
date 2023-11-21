import { Button } from '@/components/commons'
import Portal from '@/components/Portal'
import useFetch from '@/hooks/useFetch'
import useModal from '@/hooks/useModal'
import { useRouter } from 'next/navigation'
import ViewReservationModal from '../ViewReservationModal'
import * as S from './style'

export default function DeleteTableCheckModal({
  reservationId,
}: {
  reservationId: string | undefined
}) {
  const router = useRouter()
  const { openModal, closeModal } = useModal()
  const { fetch } = useFetch({
    url: `/reservation/${reservationId}`,
    method: 'delete',
    successMessage: '예약 테이블을 삭제했습니다',
    onSuccess: () => {
      closeModal()
    },
  })

  return (
    <Portal onClose={closeModal}>
      <S.DeleteTableCheckModalContainer>
        <h2>테이블 삭제</h2>
        <p>
          삭제하면 오늘 하루동안 예약이 불가합니다. <br />
          정말로 예약을 삭제하시겠습니까?
        </p>
        <S.ButtonContainer>
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
            onClick={async () => {
              await fetch()
              router.refresh()
            }}
          >
            확인
          </Button>
        </S.ButtonContainer>
      </S.DeleteTableCheckModalContainer>
    </Portal>
  )
}
