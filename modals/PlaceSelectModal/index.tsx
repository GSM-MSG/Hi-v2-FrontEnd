import { get, homebaseQueryKeys, homebaseUrl } from '@/apis'
import { XMark } from '@/assets'
import { ReservationPlace } from '@/atoms'
import { Button, Portal, Title, TitleBox } from '@/components'
import { useModal } from '@/hooks'
import { ReservationDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

export default function PlaceSelectModal() {
  const [isMonday] = useState<boolean>(new Date().getDay() === 1)
  const [reservationPlace, setReservationPlace] =
    useRecoilState(ReservationPlace)
  const { closeModal } = useModal()
  const [showPlace] = useState<{ floors: number[]; periods: number[] }>({
    floors: [2, 3, 4],
    periods: isMonday ? [7, 8, 9, 10, 11] : [8, 9, 10, 11],
  })
  const { floors, periods } = showPlace
  const { refetch } = useQuery<AxiosResponse<ReservationDataType[]>>({
    queryKey: homebaseQueryKeys.list(),
    queryFn: () =>
      get(
        homebaseUrl.hombase({
          period: reservationPlace.period,
          floor: reservationPlace.floor,
        })
      ),
  })

  const onFloorClick = (floor: number) =>
    setReservationPlace((prev) => {
      return {
        ...prev,
        floor,
      }
    })
  const onPeriodClick = (period: number) =>
    setReservationPlace((prev) => {
      return {
        ...prev,
        period,
      }
    })

  const onClick = () => {
    refetch()
    closeModal()
  }

  return (
    <Portal onClose={closeModal}>
      <S.PlaceSelectContainer>
        <TitleBox>
          <Title>상세정보 선택</Title>
          <div style={{ cursor: 'pointer' }} onClick={closeModal}>
            <XMark width='24' height='24' />
          </div>
        </TitleBox>
        <S.PlaceSelectBox>
          <span>층</span>
          <S.SelectButtonBox>
            {floors.map((floor, idx) => (
              <S.FloorButton
                key={idx}
                clicked={reservationPlace.floor}
                current_value={floor}
                onClick={() => onFloorClick(floor)}
              >
                {floor}F
              </S.FloorButton>
            ))}
          </S.SelectButtonBox>
        </S.PlaceSelectBox>
        <S.PlaceSelectBox style={{ marginTop: '30px' }}>
          <span>교시</span>
          <S.SelectButtonBox>
            {periods.map((period, idx) => (
              <S.PeriodButton
                key={idx}
                clicked={reservationPlace.period}
                current_value={period}
                onClick={() => onPeriodClick(period)}
                isMonday={isMonday}
              >
                {period}교시
              </S.PeriodButton>
            ))}
          </S.SelectButtonBox>
        </S.PlaceSelectBox>
        <S.ButtonContainer>
          <Button
            width='100%'
            height='3.2rem'
            background='#0066ff'
            color='#ffffff'
            fontSize='1rem'
            fontWeight='500'
            border='none'
            borderRadius='8px'
            onClick={onClick}
          >
            확인
          </Button>
        </S.ButtonContainer>
      </S.PlaceSelectContainer>
    </Portal>
  )
}