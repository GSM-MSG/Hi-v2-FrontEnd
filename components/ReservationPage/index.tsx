import { IsRModal } from '@/atoms/atom'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import ReservationModal from './ReservationModal'
import PageContainer from '../common/PageContainer'

function ReservationPage() {
  const isRModal = useRecoilValue(IsRModal)
  return (
    <PageContainer>
      <S.ReservationTitle>📋예약현황</S.ReservationTitle>
      {/* <S.ReservationTableContainer></S.ReservationTableContainer> */}
      {isRModal && <ReservationModal />}
    </PageContainer>
  )
}

export default ReservationPage
