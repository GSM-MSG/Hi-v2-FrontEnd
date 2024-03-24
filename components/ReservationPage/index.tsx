import {
  del,
  get,
  homebaseQueryKeys,
  homebaseUrl,
  reservationQueryKeys,
  reservationUrl,
} from '@/apis'
import { ReservationPlace } from '@/atoms'
import { useGetRole, useModal } from '@/hooks'
import {
  AllDeleteTableCheckModal,
  FloorLocationModal,
  PlaceSelect,
} from '@/modals'
import { ReservationDataType } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import { Button, PageContainer } from '../commons'
import ReservationTableItem from './ReservationTableItem'
import * as S from './style'
import { useState } from 'react'

function ReservationPage() {
  const reservationPlace = useRecoilValue(ReservationPlace)
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
  const [date, setDate] = useState<Date>(new Date())
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

  return (
    <PageContainer paddingTop='8vh' paddingBottom='5vh' background='#ffffff'>
      <S.ReservationTitleBox>
        <S.ReservationTitle>
          <h2>예약현황</h2>
          <div>
            {date.getFullYear()}.{date.getMonth().toString().padStart(2, '0')}
            .{date.getDate().toString().padStart(2, '0')}
          </div>
          <div>
            {reservationPlace.floor}층 &#12685; {reservationPlace.period}교시
          </div>
        </S.ReservationTitle>
        <S.ButtonContainer>
          <Button
            width='80px'
            height='36px'
            border='1px solid #0066ff'
            color='#0066ff'
            hoverBackground='#0066ff'
            onClick={() => openModal(<PlaceSelect />)}
          >
            상세조회
          </Button>
          <Button
            width='98px'
            height='36px'
            border='1px solid #0066ff'
            color='#0066ff'
            hoverBackground='#0066ff'
            onClick={() => openModal(<FloorLocationModal />)}
          >
            테이블 위치
          </Button>
          {isAdmin && (
            <Button
              width='80px'
              height='36px'
              border='1px solid #FF002E'
              color='#FF002E'
              hoverBackground='#FF002E'
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
        {data?.data.map((item, idx) => (
          <ReservationTableItem key={idx} item={item} />
        ))}
      </S.ReservationTableContainer>
    </PageContainer>
  )
}

export default ReservationPage
