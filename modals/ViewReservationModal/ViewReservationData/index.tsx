import { ViewReservationDataProps } from '@/types'
import * as S from './style'

export default function ViewReservationData({
  ViewReservationDataColumns,
  users,
}: ViewReservationDataProps) {
  return (
    <>
      <S.ViewReservationText>예약정보 확인</S.ViewReservationText>
      <S.ViewReservationDataContainer>
        {ViewReservationDataColumns.map((view, idx) =>
          view.name === '예약 멤버' ? (
            <S.ViewReservationDataColumn key={idx} column={idx}>
              <span>{view.name}</span>
              <p>
                {users?.map((user) => (
                  <span key={user.userId}>{user.name} </span>
                ))}
              </p>
            </S.ViewReservationDataColumn>
          ) : (
            <S.ViewReservationDataColumn key={idx} column={idx}>
              <span>{view.name}</span>
              <p className={idx === 3 ? 'last-content' : ''}>{view.content}</p>
            </S.ViewReservationDataColumn>
          )
        )}
      </S.ViewReservationDataContainer>
    </>
  )
}
