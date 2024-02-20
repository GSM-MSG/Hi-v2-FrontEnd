import { XMark } from '@/assets'
import {
  Button,
  ButtonContainer,
  CheckModalContainer,
  Portal,
  Title,
} from '@/components'
import { useFetch, useModal } from '@/hooks'
import ViewReservationModal from '../ViewReservationModal'

export default function RepresentativeMandateModal({
  username,
  userId,
  reservationId,
}: {
  username: string
  userId: string
  reservationId: string | undefined
}) {
  const { openModal, closeModal } = useModal()
  const { fetch } = useFetch({
    url: `/reservation/${reservationId}/${userId}`,
    method: 'patch',
    successMessage: `${username}님을 대표자로 위임했습니다`,
    onSuccess: () => {
      openModal(<ViewReservationModal reservationId={reservationId} />)
    },
  })

  return (
    <Portal onClose={closeModal}>
      <CheckModalContainer style={{ height: '170px' }}>
        <Title>
          <h2>대표자 위임</h2>
          <div
            onClick={() =>
              openModal(<ViewReservationModal reservationId={reservationId} />)
            }
            style={{ cursor: 'pointer' }}
          >
            <XMark />
          </div>
        </Title>
        <p>{username}님을 대표자로 위임하시겠습니까?</p>
        <ButtonContainer>
          <Button
            width='100%'
            height='2.6rem'
            background='none'
            color='#0066ff'
            fontSize='1rem'
            fontWeight='500'
            border='1px solid #0066ff'
            borderRadius='8px'
            onClick={async () => await fetch()}
          >
            위임하기
          </Button>
        </ButtonContainer>
      </CheckModalContainer>
    </Portal>
  )
}
