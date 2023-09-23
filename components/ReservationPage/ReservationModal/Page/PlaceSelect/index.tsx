import { ModalPage, Place, ReasonText, TeamMembers } from '@/atoms/atom'
import Button from '@/components/common/Button'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/common/Modal/Title'
import { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'

function PlaceSelect() {
  const [place, setPlace] = useRecoilState(Place)
  const reasonText = useRecoilValue(ReasonText)
  const teamMembers = useRecoilValue(TeamMembers)
  const setModalPage = useSetRecoilState(ModalPage)
  const [showPlace] = useState<{ floors: number[]; periods: number[] }>({
    floors: [2, 3, 4],
    periods: [8, 9, 10, 11],
  })

  const [floorClicked, setFloorClicked] = useState<number>(0)
  const [periodClicked, setPeriodClicked] = useState<number>(0)

  const { floors, periods } = showPlace

  const onFloor = (floor: number) => {
    setFloorClicked((prev) => (prev === floor ? 0 : floor))
    setPlace((prev) => ({
      ...prev,
      floor: floor.toString(),
    }))
  }

  const onPeriod = (period: number) => {
    setPeriodClicked((prev) => (prev === period ? 0 : period))
    setPlace((prev) => ({
      ...prev,
      period: period.toString(),
    }))
  }

  return (
    <S.PlaceSelectContainer>
      <TitleBox>
        <Title>
          상세정보 <span />
        </Title>
        <PageToggleBox>
          <div />
          <div />
          <div className='currentToggle' />
        </PageToggleBox>
      </TitleBox>
      <SubTitle>상세정보를 선택해주세요.</SubTitle>
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
          width='30%'
          height='3rem'
          background='#d9d9d9'
          color='#ffffff'
          borderRadius='8px'
          border='none'
          onClick={() => {
            setModalPage(2)
            setPlace((prev) => ({
              ...prev,
              floor: '',
              period: '',
            }))
          }}
        >
          돌아가기
        </Button>
        <Button
          width='68%'
          height='3rem'
          background='#0066ff'
          color='#ffffff'
          fontSize='1rem'
          fontWeight='500'
          border='none'
          borderRadius='8px'
          onClick={() => console.log(teamMembers, reasonText, place)}
        >
          다음으로
        </Button>
      </S.ButtonContainer>
    </S.PlaceSelectContainer>
  )
}

export default PlaceSelect
