import { get, patch, reservationQueryKeys, reservationUrl } from '@/apis'
import { TableCheckIcon, XMark } from '@/assets'
import { Button, Portal, Title, TitleBox } from '@/components'
import { useGetRole, useModal } from '@/hooks'
import { DeleteTableCheckModal, LeaveReservationTableModal } from '@/modals'
import { ViewReservationData, ViewReservationDataTypes } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import * as S from './style'

export default function ViewReservationModal({
  reservationId,
}: {
  reservationId: string | undefined
}) {
  const { data, refetch } = useQuery<AxiosResponse<ViewReservationData>>({
    queryKey: reservationQueryKeys.detail(reservationId),
    queryFn: () => get(reservationUrl.requestId(reservationId)),
  })
  const { homeBase, reason, users, checkStatus } = data?.data || {}
  const { isTeacher, userId } = useGetRole()
  const { mutate } = useMutation<
    void,
    Error,
    { checkStatus: boolean | undefined }
  >({
    mutationKey: reservationQueryKeys.check(reservationId),
    mutationFn: (modifyValue) =>
      patch(reservationUrl.check(reservationId), modifyValue),
    onSuccess: () => refetch(),
  })
  const ViewReservationDataColumns: ViewReservationDataTypes[] = [
    { name: '예약층', content: `${homeBase?.floor}F` },
    { name: '예약 테이블', content: `${homeBase?.homeBaseNumber}번` },
    { name: '예약 멤버' },
    { name: '예약 사유', content: `${reason}` },
  ]
  const { openModal, closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ViewReservationModalContainer>
        <TitleBox>
          <S.TitleLeftBox>
            {isTeacher && (
              <S.TableCheckBox
                onClick={() => mutate({ checkStatus: !checkStatus })}
              >
                <TableCheckIcon checkStatus={checkStatus} />
              </S.TableCheckBox>
            )}
            <Title>{homeBase?.homeBaseNumber}번 테이블</Title>
            {users?.some((user) => user.userId === userId) && (
              <Button
                width='41px'
                height='26px'
                color='#FF002E'
                border='1px solid #FF002E'
                borderRadius='8px'
                fontSize='14px'
                lineHeight='22px'
                fontWeight='400'
                background='#FFFFFF'
                hoverColor='#FFFFFF'
                hoverBackground='#FF002E'
                onClick={() =>
                  openModal(
                    <DeleteTableCheckModal reservationId={reservationId} />
                  )
                }
              >
                삭제
              </Button>
            )}
          </S.TitleLeftBox>
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
                    {users?.map((user) => (
                      <span key={user.userId}>{user.name} </span>
                    ))}
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
          {users?.some((user) => user.userId === userId) && (
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
                    reservationId={homeBase?.homeBaseId}
                    reservationNumber={homeBase?.homeBaseNumber}
                  />
                )
              }
            >
              나가기
            </Button>
          )}
          <Button
            width={
              users?.some((user) => user.userId === userId) ? '70%' : '100%'
            }
            height='3.2rem'
            background='#0066ff'
            color='#ffffff'
            fontSize='18px'
            lineHeight='27px'
            fontWeight='600'
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
