import { Title, TitleBox } from '@/components/common/Modal/Title'
import * as SVG from '@/assets/svg'
import Portal from '@/components/Portal'
import useModal from '@/hooks/useModal'
import * as S from './style'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { ViewReservationData } from '@/types/modals/ViewReservationData'
import { useRecoilValue } from 'recoil'
import { ReservationPlace } from '@/atoms/atom'
import Button from '@/components/common/Button'
import DeleteTableCheckModal from '../DeleteTableCheckModal'
import RepresentativeMandateModal from '../RepresentativeMandateModal'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'
import LeaveReservationTableModal from '../LeaveReservationTableModal'

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

  const { fetch: updateCheck } = useFetch<GetRoleTypes>({
    url: `/reservation/${reservationId}/check-status`,
    method: 'patch',
  })

  const { fetch: fetchRole, data: roleData } = useFetch<GetRoleTypes>({
    url: '/user/my-role',
    method: 'get',
  })

  const ViewReservationDatas = [
    { id: 1, name: '층', content: `${reservationPlace.floor}F` },
    { id: 2, name: '테이블', content: `${data?.reservationNumber}번` },
    {
      id: 3,
      name: '확인상태',
      content: !data?.checkStatus ? '미확인' : '확인',
    },
    {
      id: 4,
      name: '멤버',
    },
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
                <SVG.TableCheckIcon checkStatus={data?.checkStatus} />
              </div>
            )}
            예약조회
          </Title>
          <div style={{ cursor: 'pointer' }} onClick={closeModal}>
            <SVG.XMark width='24' height='24' />
          </div>
        </TitleBox>
        <S.ViewReservationDataContainer>
          {ViewReservationDatas.map((viewData) => (
            <S.ViewReservationDataColumn
              key={viewData.id}
              name={viewData.name === '멤버' ? '멤버' : ''}
            >
              <span>{viewData.name}</span>

              <S.ViewDataBox name={viewData.name === '멤버' ? '멤버' : ''}>
                {viewData.name === '멤버' ? (
                  data?.users.map((item) => (
                    <S.Member
                      key={item.userId}
                      isRepresentative={data.representativeId === item.userId}
                      onClick={() =>
                        data.representativeId === roleData?.userId &&
                        data.representativeId !== item.userId &&
                        openModal(
                          <RepresentativeMandateModal
                            username={item.name}
                            userId={item.userId}
                            reservationId={reservationId}
                          />
                        )
                      }
                    >
                      {data.representativeId === item.userId && (
                        <SVG.RepresentativeIcon />
                      )}
                      {item.name}
                    </S.Member>
                  ))
                ) : (
                  <span>{viewData.content}</span>
                )}
              </S.ViewDataBox>
            </S.ViewReservationDataColumn>
          ))}
        </S.ViewReservationDataContainer>
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
                background='#c0c0c0'
                color='#ffffff'
                fontSize='1.2rem'
                fontWeight='500'
                border='none'
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
