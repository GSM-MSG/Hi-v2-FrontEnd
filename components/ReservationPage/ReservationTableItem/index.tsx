import * as S from './style'
import * as SVG from '@/assets/svg'
import useModal from '@/hooks/useModal'
import { ReservationDataType } from '@/types/modals/ReservationData'
import { useEffect, useState } from 'react'
import ViewReservationModal from '@/modals/ViewReservationModal'
import ConfirmReservationModal from '@/modals/ReservationModal/ConfirmReservationModal'
import useFetch from '@/hooks/useFetch'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'
import ReservationModal from '@/modals/ReservationModal'
import { useSetRecoilState } from 'recoil'
import { ShowMembers, TeamMembers } from '@/atoms/atom'

export default function ReservationTableItem({
  item,
  reservationNumber,
}: {
  item: ReservationDataType | number
  reservationNumber: number
}) {
  const setShowMembers = useSetRecoilState(ShowMembers)
  const setTeamMembers = useSetRecoilState(TeamMembers)
  const [showDetailName, setShowDetailName] = useState<boolean>(false)
  const { openModal } = useModal()
  const { fetch, data } = useFetch<GetRoleTypes>({
    url: '/user/my-role',
    method: 'get',
  })

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

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
                {item.users.length === 1
                  ? item.users[0].name
                  : `${item.users[0].name} 외 ${item.users.length - 1} 명`}
              </span>
              {item.users.length !== 1 && <SVG.BackArrowIcon />}
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
      <div
        style={{ marginTop: '7rem', overflow: 'hiddlen', whiteSpace: 'nowrap' }}
      >
        {typeof item !== 'number' && item.representativeId === data?.userId && (
          <span
            style={{ marginRight: '1rem' }}
            onClick={() => {
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
            }}
          >
            예약수정
          </span>
        )}
        <span
          onClick={() => {
            openModal(
              typeof item !== 'number' ? (
                <ViewReservationModal reservationId={item.reservationId} />
              ) : (
                <ConfirmReservationModal
                  reservationNumber={reservationNumber}
                />
              )
            )
          }}
        >
          {typeof item !== 'number' ? '예약조회' : '예약하기'}
        </span>
      </div>
    </S.TableBox>
  )
}
