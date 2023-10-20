import * as S from './style'
import * as SVG from '@/assets/svg'
import useModal from '@/hooks/useModal'
import ReservationModal from '@/modals/ReservationModal'
import { ReservationDataType } from '@/types/modals/ReservationData'
import { useEffect, useState } from 'react'
import ViewReservationModal from '@/modals/ReservationModal/ViewReservationModal'

export default function ReservationTableItem({
  item,
  reservationNumber,
}: {
  item: ReservationDataType | number
  reservationNumber: number
}) {
  const [showDetailName, setShowDetailName] = useState<boolean>(false)
  const { openModal } = useModal()

  return (
    <S.TableBox reserved={typeof item !== 'number' ? true : false}>
      <S.TableInfoBox
        reserved={typeof item !== 'number' ? true : false}
        show_detail_name={showDetailName}
      >
        <div>{typeof item !== 'number' ? '예약불가' : '예약가능'}</div>
        <h2>{reservationNumber}번 테이블</h2>
        <span
          onClick={() =>
            typeof item !== 'number' && setShowDetailName((prev) => !prev)
          }
        >
          {typeof item !== 'number' ? (
            <>
              <span>
                {item.users[0].name} 외 {item.users.length - 1} 명
              </span>
              <SVG.BackArrowIcon />
            </>
          ) : (
            '예약 가능 합니다.'
          )}
        </span>
        {showDetailName && (
          <span
            style={{ marginTop: '0.3rem', color: '#b1b1b1', cursor: 'default' }}
          >
            {typeof item !== 'number' &&
              item.users.map((user) => user.name).join(', ')}
          </span>
        )}
      </S.TableInfoBox>
      <span
        onClick={() => {
          openModal(
            typeof item !== 'number' ? (
              <ViewReservationModal reservationId={item.reservationId} />
            ) : (
              <ReservationModal reservationNumber={reservationNumber} />
            )
          )
        }}
      >
        {typeof item !== 'number' ? '예약조회' : '예약하기'}
      </span>
    </S.TableBox>
  )
}
