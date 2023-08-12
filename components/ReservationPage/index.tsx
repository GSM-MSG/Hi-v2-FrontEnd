import { IsRModal } from '@/atoms/atom'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import ReservationModal from './ReservationModal'

function ReservationPage() {
  const isRModal = useRecoilValue(IsRModal)
  return (
    <S.ReservationPageContainer>
      <S.ReservationTitle>📋예약현황</S.ReservationTitle>
      {/* <S.ReservationTableContainer></S.ReservationTableContainer> */}
      {isRModal && <ReservationModal />}
    </S.ReservationPageContainer>
  )
}

export default ReservationPage
