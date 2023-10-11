import Portal from '@/components/Portal'
import { useRecoilValue } from 'recoil'
import * as S from './style'
import { ModalPage } from '@/atoms/atom'
import Reason from './Page/Reason'
import MemberSelect from './Page/MemberSelect'
import Completed from './Page/Completed'
import PlaceSelect from './Page/PlaceSelect'
import useModal from '@/hooks/useModal'
import useDeleteReservationStatus from '@/hooks/useDeleteReservationStatus'

function ReservationModal() {
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
        {page === 2 && <Reason />}
        {page === 3 && <PlaceSelect />}
        {page === 4 && <Completed />}
      </S.ReservationModalContainer>
    </Portal>
  )
}

export default ReservationModal
