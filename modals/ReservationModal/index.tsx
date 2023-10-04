import Portal from '@/components/Portal'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { ModalPage, ReasonText, TeamMembers } from '@/atoms/atom'
import Reason from './Page/Reason'
import MemberSelect from './Page/MemberSelect'
import Completed from './Page/Completed'
import PlaceSelect from './Page/PlaceSelect'
import useModal from '@/hooks/useModal'

function ReservationModal() {
  const { closeModal } = useModal()
  const setTeamMembers = useSetRecoilState<string[]>(TeamMembers)
  const setReason = useSetRecoilState<string>(ReasonText)
  const page = useRecoilValue(ModalPage)
  const onClose = () => {
    closeModal()
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
