import * as S from './style'
import Button from '../common/Button'
import * as A from '@/assets/svg'
import { useState } from 'react'

export default function MyPage() {
  const [showDetailName, setShowDetailName] = useState(false)

  return (
    <S.PageContainer>
      <S.ProfileWrapper>
        <S.ProfileImg />
        <S.NameContainer>
          <span>서주미</span>
          <S.ReservationState>신청가능</S.ReservationState>
        </S.NameContainer>
        <S.Email>s22024@gsm.hs.kr</S.Email>
      </S.ProfileWrapper>
      <S.ReservationWrapper>
        <S.ReservationTitle>
          <span>나의 예약 현황</span>
          <span>예약 중</span>
        </S.ReservationTitle>
        <S.Reservation>
          <div>
            <span className='tableNum'>1번 테이블</span>
            <Button
              width='60px'
              height='28px'
              background='#F5F5F5'
              border='none'
              color='#B1B1B1'
            >
              예약수정
            </Button>
          </div>
          <div>
            <S.NameWrapper
              showDetailName={showDetailName}
              onClick={() => setShowDetailName((prev) => !prev)}
            >
              <S.Name>
                김하온 외 3명
                <A.BackArrowIcon />
              </S.Name>
              {showDetailName && (
                <S.DetailName>김하온, 서주미, 이운린, 김희망</S.DetailName>
              )}
            </S.NameWrapper>
            <span className='info'>2023.01.10 · 3F</span>
          </div>
        </S.Reservation>
      </S.ReservationWrapper>
    </S.PageContainer>
  )
}
