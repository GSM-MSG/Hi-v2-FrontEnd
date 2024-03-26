import { BackArrowIcon } from '@/assets'
import { ReservationItemType } from '@/types'
import { useState } from 'react'
import * as S from './style'

function ReservationItem({ reservation }: { reservation: ReservationItemType }) {
  const [showDetailName, setShowDetailName] = useState(false)

  return (
    <S.Reservation>
      <div>
        <span className='tableNum'>
          {reservation.homeBase.homeBaseNumber}번 테이블
        </span>
      </div>
      <div>
        <S.NameWrapper
          showDetailName={showDetailName}
          onClick={() => setShowDetailName((prev) => !prev)}
        >
          <S.Name>
            {reservation.users[0].name} 외 {reservation.users.length - 1} 명
            <BackArrowIcon />
          </S.Name>
          {showDetailName && (
            <S.DetailName>
              {reservation.users?.map(({ name }: any) => name).join(', ')}
            </S.DetailName>
          )}
        </S.NameWrapper>
        <span className='info'>
          {reservation.homeBase.period}교시 · {reservation.homeBase.floor}F
        </span>
      </div>
    </S.Reservation>
  )
}

export default ReservationItem
