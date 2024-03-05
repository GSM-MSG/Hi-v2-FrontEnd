import { get, patch, reservationQueryKeys, reservationUrl } from '@/apis'
import { TableCheckIcon, XMark } from '@/assets'
import { ReservationPlace } from '@/atoms'
import { Button, Portal, Title, TitleBox } from '@/components'
import { useGetRole, useModal } from '@/hooks'
import {
  DeleteTableCheckModal,
  LeaveReservationTableModal,
  RepresentativeMandateModal,
} from '@/modals'
import { ViewReservationData, ViewReservationDataTypes } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useRecoilValue } from 'recoil'
import * as S from './style'

export default function ViewReservationModal({
  reservationId,
}: {
  reservationId: string | undefined
}) {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const { data, refetch } = useQuery<AxiosResponse<ViewReservationData>>({
    queryKey: reservationQueryKeys.detail(reservationId),
    queryFn: () => get(reservationUrl.requestId(reservationId)),
  })
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
    { name: '예약층', content: `${reservationPlace.floor}F` },
    { name: '예약 테이블', content: `${data?.data.reservationNumber}번` },
    { name: '예약 멤버' },
    { name: '예약 사유', content: `${data?.data.reason}` },
  ]
  const { openModal, closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ViewReservationModalContainer>
        <TitleBox>
          <Title>
            {isTeacher && (
              <S.TableCheckBox
                onClick={() => mutate({ checkStatus: !data?.data.checkStatus })}
              >
                <TableCheckIcon checkStatus={data?.data.checkStatus} />
              </S.TableCheckBox>
            )}
            {data?.data.reservationNumber}번 테이블
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
                    {data?.data.users.map((user) =>
                      user.userId === data?.data.representativeId ? (
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
          {data?.data.representativeId === userId && (
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
                  <DeleteTableCheckModal
                    reservationId={data?.data.reservationId}
                  />
                )
              }
            >
              삭제
            </Button>
          )}
          {data?.data.users.some((user) => user.userId === userId) &&
            data.data.representativeId !== userId && (
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
                      reservationId={data?.data.reservationId}
                      reservationNumber={data?.data.reservationNumber}
                    />
                  )
                }
              >
                나가기
              </Button>
            )}

          <Button
            width={
              data?.data.users.some((user) => user.userId === userId) ||
              data?.data.representativeId === userId
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
