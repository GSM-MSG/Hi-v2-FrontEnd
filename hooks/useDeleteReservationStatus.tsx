import { ModalPage, ReasonText, ShowMembers, TeamMembers } from '@/atoms'
import { UserItemType } from '@/types'
import { useSetRecoilState } from 'recoil'

export default function useDeleteReservationStatus() {
  const setTeamMembers = useSetRecoilState<string[]>(TeamMembers)
  const setShowMembers = useSetRecoilState<UserItemType[]>(ShowMembers)
  const setReason = useSetRecoilState<string>(ReasonText)
  const setModalPage = useSetRecoilState(ModalPage)

  const delReserveStatus = () => {
    setTeamMembers([])
    setShowMembers([])
    setReason('')
    setModalPage(1)
  }

  return { delReserveStatus }
}
