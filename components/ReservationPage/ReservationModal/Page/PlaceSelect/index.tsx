import { ModalPage, Place, ReasonText, TeamMembers } from '@/atoms/atom'
import Button from '@/components/common/Button'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/common/Modal/Title'
import useFetch from '@/hooks/useFetch'
import toastOptions from '@/lib/ToastOptions'
import { useState } from 'react'
import { toast } from 'react-toastify'
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

  const { fetch } = useFetch({
    url: `/homebase?floor=${place.floor}&period=${place.period}`,
    method: 'post',
    onSuccess: () => {
      setModalPage(4)
    },
    successMessage: '예약이 완료되었습니다.',
    errorMessage: {
      401: '잘못된 유저정보입니다.',
      403: '예약이 불가능한 상태입니다.',
    },
  })

  const onFloor = (floor: number) => {
    setFloorClicked((prev) => (prev === floor ? 0 : floor))
    setPlace((prev) =>
      prev.floor === floor.toString()
        ? { ...prev, floor: '' }
        : { ...prev, floor: floor.toString() }
    )
  }

  const onPeriod = (period: number) => {
    setPeriodClicked((prev) => (prev === period ? 0 : period))
    setPlace((prev) =>
      prev.period === period.toString()
        ? { ...prev, period: '' }
        : { ...prev, period: period.toString() }
    )
  }

  const onReserve = async () => {
    if (place.floor === '' || place.floor === '') {
      return toast.warning('층과 교시를 선택해주세요.', toastOptions)
    }

    await fetch({
      users: teamMembers,
      reason: reasonText,
      reservationNumber: 5, // 수정할 예정입니다.
    })
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
          onClick={onReserve}
        >
          예약하기
        </Button>
      </S.ButtonContainer>
    </S.PlaceSelectContainer>
  )
}

export default PlaceSelect
