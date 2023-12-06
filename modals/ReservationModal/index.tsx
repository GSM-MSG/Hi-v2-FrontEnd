import { ModalPage } from '@/atoms'
import Portal from '@/components/Portal'
import useDeleteReservationStatus from '@/hooks/useDeleteReservationStatus'
import useModal from '@/hooks/useModal'
import { useRecoilValue } from 'recoil'
import Completed from './Page/Completed'
import MemberSelect from './Page/MemberSelect'
import Reason from './Page/Reason'
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
