import { ReservationPlace } from '@/atoms'
import { Title, TitleBox, Button } from '@/components/commons'
import * as SVG from '@/assets/svg'
import Portal from '@/components/Portal'
import useModal from '@/hooks/useModal'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

function PlaceSelect() {
  const [reservationPlace, setReservationPlace] =
    useRecoilState(ReservationPlace)
  const { closeModal } = useModal()
  const [showPlace] = useState<{ floors: number[]; periods: number[] }>({
    floors: [2, 3, 4],
    periods: [8, 9, 10, 11],
  })

  const [floorClicked, setFloorClicked] = useState<number>(2)
  const [periodClicked, setPeriodClicked] = useState<number>(8)

  const { floors, periods } = showPlace

  const onFloor = (floor: number) => {
    setFloorClicked(floor)
  }

  const onPeriod = (period: number) => {
    setPeriodClicked(period)
  }

  return (
    <Portal onClose={closeModal}>
      <S.PlaceSelectContainer>
        <TitleBox>
          <Title>상세정보 선택</Title>
          <div style={{ cursor: 'pointer' }} onClick={closeModal}>
            <SVG.XMark width='24' height='24' />
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
                onClick={() => onFloor(floor)}
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
                onClick={() => onPeriod(period)}
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
            onClick={() => {
              setReservationPlace((prev) => {
                return {
                  ...prev,
                  period: periodClicked,
                  floor: floorClicked,
                }
              })
              closeModal()
            }}
          >
            확인
          </Button>
        </S.ButtonContainer>
      </S.PlaceSelectContainer>
    </Portal>
  )
}

export default PlaceSelect
