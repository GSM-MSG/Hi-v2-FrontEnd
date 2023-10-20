import PageContainer from '../common/PageContainer'
import { useRecoilValue } from 'recoil'
import { ReservationPlace } from '@/atoms/atom'
import useFetch from '@/hooks/useFetch'
import { useEffect, useState } from 'react'
import { ReservationDataType } from '@/types/modals/ReservationData'
import ReservationTableItem from './ReservationTableItem'
import * as S from './style'
import useModal from '@/hooks/useModal'
import PlaceSelect from '@/modals/ReservationModal/PlaceSelect'

function ReservationPage() {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const { fetch, data } = useFetch<ReservationDataType[]>({
    url: `/homebase?period=${reservationPlace.period}&floor=${reservationPlace.floor}`,
    method: 'get',
  })

  const [arr, setArr] = useState([1, 2, 3, 4, 5])

  const { openModal } = useModal()

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  useEffect(() => {
    setArr((prev: any) =>
      prev.map(
        (e: any) => data?.find((obj) => obj.reservationNumber === e) || e
      )
    )
  }, [data])

  useEffect(() => {
    openModal(<PlaceSelect />)
  }, [])

  return (
    <PageContainer paddingTop='8vh' paddingBottom='5vh' background='#ffffff'>
      <S.ReservationTitle>예약현황</S.ReservationTitle>
      <S.ReservationTableContainer>
        {arr.slice(0, reservationPlace.floor === 3 ? 5 : 4).map((item, idx) => (
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
