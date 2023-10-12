import * as S from './style'
import * as SVG from '@/assets/svg'
import useModal from '@/hooks/useModal'
import ReservationModal from '@/modals/ReservationModal'
import { ReservationDataType } from '@/types/modals/ReservationData'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ReservationTableItem({
  item,
  reservationNumber,
}: {
  item: ReservationDataType
  reservationNumber: number
}) {
  const [showDetailName, setShowDetailName] = useState<boolean>(false)
  const { openModal } = useModal()
  const router = useRouter()

  return (
    <S.TableBox reserved={item.users ? true : false}>
      <S.TableInfoBox
        reserved={item.users ? true : false}
        show_detail_name={showDetailName}
      >
        <div>{item.users ? '예약불가' : '예약가능'}</div>
        <h2>{reservationNumber}번 테이블</h2>
        <span onClick={() => item.users && setShowDetailName((prev) => !prev)}>
          {item.users
            ? `${item.users[0].name} 외 ${item.users.length - 1 + '명'}`
            : '예약 가능 합니다.'}
          <SVG.BackArrowIcon />
        </span>
        {showDetailName && (
          <span
            style={{ marginTop: '0.3rem', color: '#b1b1b1', cursor: 'default' }}
          >
            {item.users.map((user) => user.name).join(', ')}
          </span>
        )}
      </S.TableInfoBox>
      <span
        onClick={
          item.users
            ? () =>
                router.push(
                  {
                    pathname: '/reservation/detail',
                    query: {
                      reservationId: item.reservationId,
                    },
                  },
                  '/reservation/detail'
                )
            : () =>
                openModal(
                  <ReservationModal reservationNumber={reservationNumber} />
                )
        }
      >
        {item.users ? '예약조회' : '예약하기'}
      </span>
    </S.TableBox>
  )
}
