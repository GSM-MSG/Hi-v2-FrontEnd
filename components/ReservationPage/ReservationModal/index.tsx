import Portal from '@/components/Portal'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { IsModal, ModalPage } from '@/apis/atoms/atom'
import Reason from './Page/Reason'
import MemberSelection from './Page/MemberSelection'

function ReservationModal() {
  const setIsModal = useSetRecoilState(IsModal)
  const page = useRecoilValue(ModalPage)
  const onClose = () => setIsModal(false)
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
