import { LoadingBook } from '@/assets'
import * as S from './style'

export default function LoadingViewReservation() {
  return (
    <S.LoadingViewReservationContainer>
      <LoadingBook />
      <span>예약정보를 가져오는 중이에요...</span>
    </S.LoadingViewReservationContainer>
  )
}