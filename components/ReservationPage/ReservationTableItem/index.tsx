import { BackArrowIcon } from '@/assets'
import { ShowMembers, TeamMembers } from '@/atoms'
import { useModal } from '@/hooks'
import {
  ConfirmReservationModal,
  ReservationModal,
  ViewReservationModal,
} from '@/modals'
import { MyPageType, ReservationDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import * as S from './style'
import { get, userQueryKeys, userUrl } from '@/apis'

export default function ReservationTableItem({
  item,
  reservationNumber,
}: {
  item: ReservationDataType | number
  reservationNumber: number
}) {
  const setShowMembers = useSetRecoilState(ShowMembers)
  const setTeamMembers = useSetRecoilState(TeamMembers)
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false)
  const { openModal } = useModal()
  const { data } = useQuery<AxiosResponse<MyPageType>>({
    queryKey: userQueryKeys.my(),
    queryFn: () => get(userUrl.my()),
  })

  const onModify = (item: ReservationDataType) => {
    setShowMembers(
      item.users
        .map((user) => user)
        .filter((user) => user.userId !== item.representativeId)
    )
    setTeamMembers(
      item.users
        .map((user) => user.userId)
        .filter((userId) => userId !== item.representativeId)
    )
    openModal(
      <ReservationModal
        isModify={true}
        reservationNumber={reservationNumber}
        reservationId={item.reservationId}
      />
    )
  }

  const onReservationCase = (item: ReservationDataType | number) => {
    openModal(
      typeof item !== 'number' ? (
        <ViewReservationModal reservationId={item.reservationId} />
      ) : data?.data.useStatus === 'AVAILABLE' ? (
        <ConfirmReservationModal reservationNumber={reservationNumber} />
      ) : (
        toast.info('예약이 불가능한 상태입니다')
      )
    )
  }

  return (
    <S.TableBox reserved={typeof item !== 'number' ? true : false}>
      <S.TableInfoBox
        reserved={typeof item !== 'number' ? true : false}
        show_detail_name={isShowDetail}
      >
        <div>{typeof item !== 'number' ? '예약불가' : '예약가능'}</div>
        <h2>{reservationNumber}번 테이블</h2>
        <span
          onClick={() =>
            typeof item !== 'number' && setIsShowDetail((prev) => !prev)
          }
        >
          {typeof item !== 'number' ? (
            <>
              <span>
                {item.users.length === 1
                  ? item.users[0].name
                  : `${item.users[0].name} 외 ${item.users.length - 1} 명`}
              </span>
              {item.users.length !== 1 && <BackArrowIcon />}
            </>
          ) : (
            '예약 가능 합니다.'
          )}
        </span>
        {isShowDetail && (
          <S.ShowDetailName>          
            {typeof item !== 'number' &&
              item.users.map((user) => user.name).join(', ')}
          </S.ShowDetailName>
        )}
      </S.TableInfoBox>
      <div
        style={{ marginTop: '7rem', overflow: 'hiddlen', whiteSpace: 'nowrap' }}
      >
        {typeof item !== 'number' && item.representativeId === data?.data.userId && (
          <span style={{ marginRight: '1rem' }} onClick={() => onModify(item)}>
            예약수정
          </span>
        )}
        <span onClick={() => onReservationCase(item)}>
          {typeof item !== 'number' ? '예약조회' : '예약하기'}
        </span>
      </div>
    </S.TableBox>
  )
}
