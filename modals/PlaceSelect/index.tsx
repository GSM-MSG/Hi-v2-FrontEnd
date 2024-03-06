import { ReservationPlace, ReservationTables } from '@/atoms'
import { Button, Portal, Title, TitleBox } from '@/components'
import { useModal } from '@/hooks'
import { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './style'
import { XMark } from '@/assets'
import { get, homebaseQueryKeys, homebaseUrl } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ReservationDataType } from '@/types'

function PlaceSelect() {
  const [reservationPlace, setReservationPlace] =
    useRecoilState(ReservationPlace)
  const setReservationTables = useSetRecoilState(ReservationTables)
  const { closeModal } = useModal()
  const [showPlace] = useState<{ floors: number[]; periods: number[] }>({
    floors: [2, 3, 4],
    periods: [8, 9, 10, 11],
  })
  const [floorClicked, setFloorClicked] = useState<number>(2)
  const [periodClicked, setPeriodClicked] = useState<number>(8)
  const { floors, periods } = showPlace
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

  const onFloorClick = (floor: number) => {
    setFloorClicked(floor)
    setReservationPlace((prev) => {
      return {
        ...prev,
        floor,
      }
    })
  }

  const onPeriodClick = (period: number) => {
    setPeriodClicked(period)
    setReservationPlace((prev) => {
      return {
        ...prev,
        period,
      }
    })
  }

  const onApply = () => {
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
          <S.FloorSelectButtonBox>
            {floors.map((floor, idx) => (
              <S.FloorButton
                key={idx}
                clicked={floorClicked}
                current_value={floor}
                onClick={() => onFloorClick(floor)}
              >
                {floor}F
              </S.FloorButton>
            ))}
          </S.FloorSelectButtonBox>
        </S.PlaceSelectBox>
        <S.PlaceSelectBox style={{ marginTop: '30px' }}>
          <span>교시</span>
          <S.PeriodSelectButtonBox>
            {periods.map((period, idx) => (
              <S.PeriodButton
                key={idx}
                clicked={periodClicked}
                current_value={period}
                onClick={() => onPeriodClick(period)}
              >
                {period}교시
              </S.PeriodButton>
            ))}
          </S.PeriodSelectButtonBox>
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
            onClick={onApply}
          >
            확인
          </Button>
        </S.ButtonContainer>
      </S.PlaceSelectContainer>
    </Portal>
  )
}

export default PlaceSelect
