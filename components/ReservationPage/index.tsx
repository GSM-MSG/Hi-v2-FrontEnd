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
import { PlaceSelect } from '@/modals'
import { ReservationDataType } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import { Button, PageContainer } from '../commons'
import ReservationTableItem from './ReservationTableItem'
import * as S from './style'

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
  const [reservationTables, setReservationTables] = useState([1, 2, 3, 4, 5])

  useEffect(() => {
    setReservationTables([1, 2, 3, 4, 5])
    setReservationTables((prev: any) =>
      prev.map(
        (e: any) => data?.data.find((obj) => obj.reservationNumber === e) || e
      )
    )
  }, [data, setReservationTables])

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            width='3.8rem'
            height='1.7rem'
            border='1px solid #0066ff'
            borderRadius='4px'
            color='#0066ff'
            fontSize='0.81rem'
            fontWeight='500'
            background='none'
            hoverBackground='#0066ff'
            hoverColor='#ffffff'
            onClick={() => openModal(<PlaceSelect />)}
          >
            상세조회
          </Button>
          {isAdmin && (
            <Button
              width='3.8rem'
              height='1.7rem'
              border='1px solid #FF002E'
              borderRadius='4px'
              color='#FF002E'
              fontSize='0.81rem'
              fontWeight='500'
              background='none'
              hoverBackground='#FF002E'
              hoverColor='#ffffff'
              style={{ marginLeft: '0.3rem' }}
              onClick={() => mutate()}
            >
              전체삭제
            </Button>
          )}
        </div>
      </S.ReservationTitleBox>
      <S.ReservationTableContainer>
        {reservationTables
          .slice(0, reservationPlace.floor === 3 ? 5 : 4)
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
