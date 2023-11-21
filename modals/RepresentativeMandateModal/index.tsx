import { Title } from '@/components/commons/Modal/Title'
import Portal from '@/components/Portal'
import useModal from '@/hooks/useModal'
import * as SVG from '@/assets/svg'
import * as S from './style'
import { ButtonContainer } from '../DeleteTableCheckModal/style'
import Button from '@/components/commons/Button'
import useFetch from '@/hooks/useFetch'
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
      <S.RepresentativeMandateModalContainer>
        <Title>
          <h2>대표자 위임</h2>
          <div
            onClick={() =>
              openModal(<ViewReservationModal reservationId={reservationId} />)
            }
            style={{ cursor: 'pointer' }}
          >
            <SVG.XMark />
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
            대표자 위임
          </Button>
        </ButtonContainer>
      </S.RepresentativeMandateModalContainer>
    </Portal>
  )
}
