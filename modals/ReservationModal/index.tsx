import { ModalPage } from '@/atoms'
import { Portal } from '@/components'
import { useModal, useDeleteReservationStatus } from '@/hooks'
import { useRecoilValue } from 'recoil'
import { Completed, MemberSelect, Reason } from './Page'
import * as S from './style'

function ReservationModal({
  reservationNumber,
  isModify,
  reservationId,
}: {
  reservationNumber: number
  isModify: boolean
  reservationId?: string
}) {
  const { closeModal } = useModal()
  const { delReserveStatus } = useDeleteReservationStatus()

  const page = useRecoilValue<number>(ModalPage)

  const onClose = () => {
    closeModal()
    delReserveStatus()
  }

  return (
    <Portal onClose={onClose}>
      <S.ReservationModalContainer>
        {page === 1 && <MemberSelect />}
        {page === 2 && (
          <Reason
            reservationNumber={reservationNumber}
            isModify={isModify}
            reservationId={reservationId}
          />
        )}
        {page === 3 && <Completed isModify={isModify} />}
      </S.ReservationModalContainer>
    </Portal>
  )
}

export default ReservationModal
