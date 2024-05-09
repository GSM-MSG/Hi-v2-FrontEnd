import { RefetchProps, ReservationDataType } from '@/types'
import ReservationSituation from './ReservationSituation'
import ReservationTopButtons from './ReservationTopButtons'
import * as S from './style'

const ReservationTop = ({ refetch }: RefetchProps<ReservationDataType[]>) => {
  return (
    <S.ReservationTopWrapper>
      <ReservationSituation />
      <ReservationTopButtons refetch={refetch} />
    </S.ReservationTopWrapper>
  )
}

export default ReservationTop
