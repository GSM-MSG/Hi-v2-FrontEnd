import Portal from '@/components/Portal'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { IsRModal, ModalPage } from '@/atoms/atom'
import Reason from './Page/Reason'
import MemberSelection from './Page/MemberSelection'

function ReservationModal() {
  const setIsRModal = useSetRecoilState(IsRModal)
  const page = useRecoilValue(ModalPage)
  const onClose = () => setIsRModal(false)
  return (
    <Portal onClose={onClose}>
      <S.ReservationModalContainer>
        {page === 1 && <MemberSelection />}
        {page === 2 && <Reason />}
      </S.ReservationModalContainer>
    </Portal>
  )
}

export default ReservationModal
