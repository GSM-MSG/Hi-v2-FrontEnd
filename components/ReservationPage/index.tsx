import {
  get,
  homebaseQueryKeys,
  homebaseUrl
} from '@/apis'
import { ReservationPlace } from '@/atoms'
import { ReservationDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRecoilValue } from 'recoil'
import { PageContainer } from '../commons'
import ReservationTableList from './ReservationTableList'
import ReservationTop from './ReservationTop'

export default function ReservationPage() {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const { data: reservationList, isLoading, refetch } = useQuery<ReservationDataType[], AxiosError>({
    queryKey: homebaseQueryKeys.list(),
    queryFn: () =>
      get(
        homebaseUrl.hombase({
          period: reservationPlace.period,
          floor: reservationPlace.floor,
        })
      ),
  })

  return (
    <PageContainer paddingTop='8vh' paddingBottom='5vh' background='#ffffff'>
      <ReservationTop refetch={refetch} />
      <ReservationTableList isLoading={isLoading} reservationList={reservationList} />
    </PageContainer>
  )
}