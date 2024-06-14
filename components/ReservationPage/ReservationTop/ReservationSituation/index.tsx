import { useRecoilValue } from 'recoil';
import * as S from './style';
import { ReservationPlace } from '@/atoms';
import { useState } from 'react';

const ReservationSituation = () => {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const [date] = useState<Date>(new Date())

  return (
    <S.ReservationSituationBox>
      <S.SituationText>예약현황</S.SituationText>
      <S.SituationInfoBox>
        {date.getFullYear()}.
        {(date.getMonth() + 1).toString().padStart(2, '0')}.
        {date.getDate().toString().padStart(2, '0')}
      </S.SituationInfoBox>
      <S.SituationInfoBox>
        {reservationPlace.floor}층 &#12685; {reservationPlace.period}교시
      </S.SituationInfoBox>
    </S.ReservationSituationBox>
  )
};

export default ReservationSituation;