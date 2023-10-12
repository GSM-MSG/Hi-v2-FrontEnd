import PageContainer from '../common/PageContainer'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { ReservationPlace } from '@/atoms/atom'
import useFetch from '@/hooks/useFetch'
import { useEffect, useState } from 'react'
import { ReservationDataType } from '@/types/modals/ReservationData'
import * as SVG from '@/assets/svg'
import ReservationTableItem from './ReservationTableItem'
import * as S from './style'

function ReservationPage() {
  const [showDetailName, setShowDetailName] = useState(false)
  const reservationPlace = useRecoilValue(ReservationPlace)
  const { fetch, data } = useFetch<ReservationDataType[]>({
    url: `/homebase?period=${reservationPlace.period}&floor=${reservationPlace.floor}`,
    method: 'get',
  })

  useEffect(() => {
    const fetchData = async () => {
      await fetch()
    }
    fetchData()
  }, [])

  return (
    <PageContainer paddingTop='8vh' paddingBottom='5vh' background='#ffffff'>
      <S.ReservationTitle>예약현황</S.ReservationTitle>
      {data?.map((item, idx) => (
        <ReservationTableItem
          key={idx}
          item={item}
          reservationNumber={idx + 1}
        />
      ))}
    </PageContainer>
  )
}

export default ReservationPage
