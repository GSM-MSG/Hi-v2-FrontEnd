import { ModalPage } from '@/atoms'
import { Portal } from '@/components'
import { useDeleteReservationStatus, useModal } from '@/hooks'
import { ReservationModalProps } from '@/types'
import { useRecoilValue } from 'recoil'
import { Completed, MemberSelect, Reason } from './Page'
import * as S from './style'

export default function ReservationModal({
  maxCapacity,
  homeBaseNumber,
  isModify,
  reservationId,
}: ReservationModalProps) {
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
        {page === 1 && <MemberSelect maxCapacity={maxCapacity}/>}
        {page === 2 && (
          <Reason
            homeBaseNumber={homeBaseNumber}
            isModify={isModify}
            reservationId={reservationId}
          />
        )}
        {page === 3 && <Completed isModify={isModify} />}
      </S.ReservationModalContainer>
    </Portal>
  )
}