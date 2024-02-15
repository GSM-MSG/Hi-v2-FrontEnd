import { TableCheckIcon, XMark } from '@/assets'
import { ReservationPlace } from '@/atoms'
import { Button, Portal, Title, TitleBox } from '@/components'
import { useFetch, useModal } from '@/hooks'
import {
  DeleteTableCheckModal,
  LeaveReservationTableModal,
  RepresentativeMandateModal,
} from '@/modals'
import {
  GetRoleType,
  ViewReservationData,
  ViewReservationDataTypes,
} from '@/types'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

export default function ViewReservationModal({
  reservationId,
}: {
  reservationId: string | undefined
}) {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const { fetch, data } = useFetch<ViewReservationData>({
    url: `/reservation/${reservationId}`,
    method: 'get',
  })

  const { fetch: updateCheck } = useFetch<GetRoleType>({
    url: `/reservation/${reservationId}/check-status`,
    method: 'patch',
  })

  const { fetch: fetchRole, data: roleData } = useFetch<GetRoleType>({
    url: '/user/my-role',
    method: 'get',
  })

  const ViewReservationDataColumns: ViewReservationDataTypes[] = [
    { name: '예약층', content: `${reservationPlace.floor}F` },
    { name: '예약 테이블', content: `${data?.reservationNumber}번` },
    { name: '예약 멤버' },
    { name: '예약 사유', content: `${data?.reason}` },
  ]

  const { openModal, closeModal } = useModal()

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  useEffect(() => {
    ;(async () => await fetchRole())()
  }, [fetchRole])

  return (
    <Portal onClose={closeModal}>
      <S.ViewReservationModalContainer>
        <TitleBox>
          <Title>
            {roleData?.role.includes('ROLE_TEACHER') && (
              <div
                onClick={async () => await updateCheck(data?.checkStatus)}
                style={{
                  cursor: 'pointer',
                  marginTop: '0.12rem',
                  marginRight: '0.3rem',
                }}
              >
                <TableCheckIcon checkStatus={data?.checkStatus} />
              </div>
            )}
            {data?.reservationNumber}
          </Title>
          <div style={{ cursor: 'pointer' }} onClick={closeModal}>
            <XMark width='24' height='24' />
          </div>
        </TitleBox>
        <S.ViewReservationDataBox>
          <S.ViewReservationText>예약정보 확인</S.ViewReservationText>
          <S.ViewReservationDataContainer>
            {ViewReservationDataColumns.map((view, idx) =>
              view.name === '예약 멤버' ? (
                <S.ViewReservationDataColumn key={idx} column={idx}>
                  <span>{view.name}</span>
                  <p>
                    {data?.users.map((user) =>
                      user.userId === data?.representativeId ? (
                        <b key={user.userId}>{user.name} </b>
                      ) : (
                        <span
                          key={user.userId}
                          onClick={() =>
                            openModal(
                              <RepresentativeMandateModal
                                username={user.name}
                                userId={user.userId}
                                reservationId={reservationId}
                              />
                            )
                          }
                        >
                          {user.name}{' '}
                        </span>
                      )
                    )}
                  </p>
                </S.ViewReservationDataColumn>
              ) : (
                <S.ViewReservationDataColumn key={idx} column={idx}>
                  <span>{view.name}</span>
                  <p>{view.content}</p>
                </S.ViewReservationDataColumn>
              )
            )}
          </S.ViewReservationDataContainer>
        </S.ViewReservationDataBox>
        <S.ViewReservationButtonContainer>
          {data?.representativeId === roleData?.userId && (
            <Button
              width='30%'
              height='3.2rem'
              background='#FF002E'
              color='#ffffff'
              fontSize='1.2rem'
              fontWeight='500'
              border='none'
              borderRadius='8px'
              onClick={() =>
                openModal(
                  <DeleteTableCheckModal reservationId={data?.reservationId} />
                )
              }
            >
              삭제
            </Button>
          )}
          {data?.users.some((user) => user.userId === roleData?.userId) &&
            data.representativeId !== roleData?.userId && (
              <Button
                width='30%'
                height='3.2rem'
                background='none'
                color='#0066ff'
                fontSize='1.2rem'
                fontWeight='700'
                border='1px solid #0066ff'
                borderRadius='8px'
                onClick={() =>
                  openModal(
                    <LeaveReservationTableModal
                      reservationId={data?.reservationId}
                      reservationNumber={data.reservationNumber}
                    />
                  )
                }
              >
                나가기
              </Button>
            )}

          <Button
            width={
              data?.users.some((user) => user.userId === roleData?.userId) ||
              data?.representativeId === roleData?.userId
                ? '70%'
                : '100%'
            }
            height='3.2rem'
            background='#0066ff'
            color='#ffffff'
            fontSize='1.2rem'
            fontWeight='500'
            border='none'
            borderRadius='8px'
            onClick={closeModal}
          >
            확인
          </Button>
        </S.ViewReservationButtonContainer>
      </S.ViewReservationModalContainer>
    </Portal>
  )
}
