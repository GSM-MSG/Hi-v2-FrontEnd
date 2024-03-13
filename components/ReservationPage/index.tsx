import {
  del,
  get,
  homebaseQueryKeys,
  homebaseUrl,
  reservationQueryKeys,
  reservationUrl,
} from '@/apis'
import { ReservationPlace, ReservationTables } from '@/atoms'
import { useGetRole, useModal } from '@/hooks'
import { AllDeleteTableCheckModal, PlaceSelect } from '@/modals'
import { ReservationDataType } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, PageContainer } from '../commons'
import ReservationTableItem from './ReservationTableItem'
import * as S from './style'

function ReservationPage() {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const [reservationTables, setReservationTables] =
    useRecoilState(ReservationTables)
  const { data, refetch } = useQuery<AxiosResponse<ReservationDataType[]>>({
    queryKey: homebaseQueryKeys.list(),
    queryFn: () =>
      get(
        homebaseUrl.hombase({
          period: reservationPlace.period,
          floor: reservationPlace.floor,
        })
      ),
  })
  const today: Date = new Date()
  const { mutate } = useMutation<void, Error>({
    mutationKey: reservationQueryKeys.deleteAll(),
    mutationFn: () => del(reservationUrl.deleteAll()),
    onSuccess: () => {
      refetch()
      toast.success('예약 테이블을 모두 삭제했습니다.')
    },
  })
  const { isAdmin } = useGetRole()
  const { openModal } = useModal()

  useEffect(() => {
    setReservationTables([1, 2, 3, 4, 5])
    setReservationTables((prev: any) =>
      prev.map(
        (e: any) => data?.data.find((obj) => obj.reservationNumber === e) || e
      )
    )
  }, [data?.data, setReservationTables])

  return (
    <PageContainer paddingTop='8vh' paddingBottom='5vh' background='#ffffff'>
      <S.ReservationTitleBox>
        <S.ReservationTitle>
          <h2>예약현황</h2>
          <div>
            {today.getFullYear()}.{today.getMonth().toString().padStart(2, '0')}
            .{today.getDay().toString().padStart(2, '0')}
          </div>
          <div>
            {reservationPlace.floor}층 &#12685; {reservationPlace.period}교시
          </div>
        </S.ReservationTitle>
        <S.ButtonContainer>
          <Button
            border='1px solid #0066ff'
            borderRadius='8px'
            color='#0066ff'
            background='none'
            hoverBackground='#0066ff'
            hoverColor='#ffffff'
            onClick={() => openModal(<PlaceSelect />)}
          >
            상세조회
          </Button>
          {isAdmin && (
            <Button
              border='1px solid #FF002E'
              borderRadius='8px'
              color='#FF002E'
              background='none'
              hoverBackground='#FF002E'
              hoverColor='#ffffff'
              onClick={() =>
                openModal(
                  <AllDeleteTableCheckModal onDelete={() => mutate()} />
                )
              }
            >
              전체삭제
            </Button>
          )}
        </S.ButtonContainer>
      </S.ReservationTitleBox>
      <S.ReservationTableContainer>
        {reservationTables
          .slice(
            0,
            reservationPlace.floor === 3
              ? 5
              : reservationPlace.floor === 2
              ? 3
              : 4
          )
          .map((item, idx) => (
            <ReservationTableItem
              key={idx}
              item={item}
              reservationNumber={idx + 1}
            />
          ))}
      </S.ReservationTableContainer>
    </PageContainer>
  )
}

export default ReservationPage
