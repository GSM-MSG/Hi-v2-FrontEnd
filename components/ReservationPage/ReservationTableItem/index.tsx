import { get, userQueryKeys, userUrl } from '@/apis'
import { BackArrowIcon, TableCheckIcon } from '@/assets'
import { ShowMembers, TeamMembers } from '@/atoms'
import { useGetRole, useModal } from '@/hooks'
import {
  ConfirmReservationModal,
  ReservationModal,
  ViewReservationModal,
} from '@/modals'
import { theme } from '@/styles'
import { MyPageType, ReservationDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import * as S from './style'

export default function ReservationTableItem({
  item,
}: {
  item: ReservationDataType
}) {
  const setShowMembers = useSetRecoilState(ShowMembers)
  const setTeamMembers = useSetRecoilState(TeamMembers)
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false)
  const { openModal } = useModal()
  const { data } = useQuery<AxiosResponse<MyPageType>>({
    queryKey: userQueryKeys.my(),
    queryFn: () => get(userUrl.my()),
  })
  const { useStatus } = data?.data || {}
  const { isTeacher, userId } = useGetRole()

  const onModify = () => {
    setShowMembers(item.users.filter((user) => user.userId !== userId))
    setTeamMembers(
      item.users.map((user) => user.userId).filter((user) => user !== userId)
    )
    openModal(
      <ReservationModal
        maxCapacity={item.homeBase.maxCapacity}
        isModify={true}
        homeBaseNumber={item.homeBase.homeBaseNumber}
        reservationId={item.reservationId}
      />
    )
  }

  const onReservationCase = () => {
    openModal(
      item.reservationId !== null ? (
        <ViewReservationModal reservationId={item.reservationId} />
      ) : useStatus === 'AVAILABLE' ? (
        <ConfirmReservationModal
          maxCapacity={item.homeBase.maxCapacity}
          homeBaseNumber={item.homeBase.homeBaseNumber}
        />
      ) : (
        toast.info('예약이 불가능한 상태입니다')
      )
    )
  }

  return (
    <S.TableBox reserved={item.reservationId !== null ? true : false}>
      <S.TableInfoBox
        reserved={item.reservationId !== null ? true : false}
        show_detail_name={isShowDetail}
      >
        <S.TableStatusBox reserved={item.reservationId !== null ? true : false}>
          {item.reservationId !== null ? '예약불가' : '예약가능'}
        </S.TableStatusBox>
        <S.TableNumberBox>
          {item.reservationId !== null && isTeacher && item.checkStatus && (
            <TableCheckIcon checkStatus={item.checkStatus} />
          )}
          <h2>{item.homeBase.homeBaseNumber}번 테이블</h2>
          {item.reservationId === null && (
            <h3>(최대 {item.homeBase.maxCapacity}명)</h3>
          )}
        </S.TableNumberBox>
        {item.reservationId !== null ? (
          <span onClick={() => setIsShowDetail((prev) => !prev)}>
            <>
              <span>
                {item.users.length === 1
                  ? item.users[0].name
                  : `${item.users[0].name} 외 ${item.users.length - 1} 명`}
              </span>
              {item.users.length !== 1 && <BackArrowIcon />}
            </>
          </span>
        ) : (
          <span>예약 가능 합니다.</span>
        )}
        <S.ShowDetailName style={{ color: theme.color.Grayscale.gray05 }}>
          {isShowDetail && item.users.map((user) => user.name).join(', ')}
        </S.ShowDetailName>
      </S.TableInfoBox>
      <S.ReservationButtonContainer>
        {item.reservationId !== null &&
          item.users.some((user) => user.userId === userId) && (
            <span onClick={onModify}>예약수정</span>
          )}
        <span onClick={onReservationCase}>
          {item.reservationId !== null ? '예약조회' : '예약하기'}
        </span>
      </S.ReservationButtonContainer>
    </S.TableBox>
  )
}
