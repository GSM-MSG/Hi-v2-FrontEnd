import Portal from '@/components/Portal'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { IsRModal, ModalPage, ReasonText, TeamMembers } from '@/atoms/atom'
import Reason from './Page/Reason'
import MemberSelect from './Page/MemberSelect'
import Completed from './Page/Completed'
import PlaceSelect from './Page/PlaceSelect'

function ReservationModal() {
  const setIsRModal = useSetRecoilState<boolean>(IsRModal)
  const setTeamMembers = useSetRecoilState<string[]>(TeamMembers)
  const setReason = useSetRecoilState<string>(ReasonText)
  const page = useRecoilValue(ModalPage)
  const onClose = () => {
    setIsRModal(false)
    setTeamMembers([])
    setReason('')
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
