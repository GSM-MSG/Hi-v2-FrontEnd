import { ReservationListProps } from '@/types';
import ReservationTableItem from './ReservationTableItem';
import * as S from './style';

export default function ReservationList({ isLoading, reservationList}: ReservationListProps) {
  return (
    <S.ReservationTableContainer>
      {isLoading ? (
        <S.LoadingText>예약 현황을 가져오는 중입니다..</S.LoadingText>
        ) : (
        reservationList?.map((item) => (
            <ReservationTableItem key={item.homeBase.homeBaseId} item={item} />
          ))
        )}
      </S.ReservationTableContainer>
  )
};