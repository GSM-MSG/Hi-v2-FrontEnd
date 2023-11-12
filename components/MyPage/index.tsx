import * as S from './style'
import Button from '../common/Button'
import * as SVG from '@/assets/svg'
import { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { MyPageType } from '@/types/MyPageType'
import Image from 'next/image'

export default function MyPage() {
  const [showDetailName, setShowDetailName] = useState(false)

  const { fetch, data } = useFetch<MyPageType>({
    url: '/user/my-page',
    method: 'get',
    errorMessage: {
      401: '토큰 값이 이상하거나 변질되었습니다.',
    },
  })

  const buttonColor = data?.useStatus === 'AVAILABLE' ? '#00A441' : '#C0C0C0'

  useEffect(() => {
    ;(async () => await fetch())()
  }, [])

  if (!data) return <div />

  return (
    <S.PageContainer>
      <S.ProfileWrapper>
        <S.ProfileImg>
          {data.profileImageUrl ? (
            <Image
              src={data.profileImageUrl}
              alt='profileImage'
              width={100}
              height={100}
            />
          ) : (
            <SVG.UserProfile />
          )}
        </S.ProfileImg>
        <S.NameContainer>
          <span>{data.name}</span>
          <S.ReservationState buttonColor={buttonColor}>
            {data.useStatus === 'AVAILABLE' ? '예약가능' : '예약불가'}
          </S.ReservationState>
        </S.NameContainer>
        <S.Email>{data.email}</S.Email>
      </S.ProfileWrapper>
      <S.ReservationWrapper>
        <S.ReservationTitle>
          <span>나의 예약 현황</span>
          {data.reservation && <span>예약 중</span>}
        </S.ReservationTitle>
        {data.reservation && (
          <S.Reservation>
            <div>
              <span className='tableNum'>
                {data.reservation.reservationNumber}번 테이블
              </span>
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
                  {data.reservation.users[0].name} 외{' '}
                  {data.reservation.users.length - 1}명
                  <SVG.BackArrowIcon />
                </S.Name>
                {showDetailName && (
                  <S.DetailName>
                    {data.reservation.users.map(({ name }) => name).join(', ')}
                  </S.DetailName>
                )}
              </S.NameWrapper>
              <span className='info'>
                {data.reservation.period}교시 · {data.reservation.floor}F
              </span>
            </div>
          </S.Reservation>
        )}
      </S.ReservationWrapper>
    </S.PageContainer>
  )
}