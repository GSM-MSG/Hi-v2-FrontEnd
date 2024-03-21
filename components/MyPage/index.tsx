import { BackArrowIcon, UserProfile } from '@/assets'
import { MyPageType } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import * as S from './style'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { get, userQueryKeys, userUrl } from '@/apis'

export default function MyPage() {
  const [showDetailName, setShowDetailName] = useState(false)

  const { data } = useQuery<AxiosResponse<MyPageType>>({
    queryKey: userQueryKeys.my(),
    queryFn: () => get(userUrl.my()),
  })

  const { useStatus, profileImageUrl, name, email, reservations } =
    data?.data || {}

  const buttonColor = useStatus === 'AVAILABLE' ? '#00A441' : '#C0C0C0'

  return (
    <S.PageContainer>
      <S.ProfileWrapper>
        <S.ProfileImg>
          {profileImageUrl ? (
            <Image
              src={profileImageUrl}
              alt='profileImage'
              objectFit='cover'
              width={100}
              height={100}
            />
          ) : (
            <UserProfile />
          )}
        </S.ProfileImg>
        <S.NameContainer>
          <span>{name}</span>
          <S.ReservationState buttonColor={buttonColor}>
            {useStatus === 'AVAILABLE' ? '신청가능' : '예약불가'}
          </S.ReservationState>
        </S.NameContainer>
        <S.Email>{email}</S.Email>
      </S.ProfileWrapper>
      <S.ReservationWrapper>
        <S.ReservationTitle>
          <span>나의 예약 현황</span>
          {reservations && <span>예약 중</span>}
        </S.ReservationTitle>
        {reservations?.map((i, idx) => (
          <S.Reservation key={idx}>
            <div>
              <span className='tableNum'>
                {i.homeBase.homeBaseNumber}번 테이블
              </span>
            </div>
            <div>
              <S.NameWrapper
                showDetailName={showDetailName}
                onClick={() => setShowDetailName((prev) => !prev)}
              >
                <S.Name>
                  {i.users[0].name} 외 {i.users.length - 1} 명
                  <BackArrowIcon />
                </S.Name>
                {showDetailName && (
                  <S.DetailName>
                    {i.users.map(({ name }) => name).join(', ')}
                  </S.DetailName>
                )}
              </S.NameWrapper>
              <span className='info'>
                {i.homeBase.period}교시 · {i.homeBase.floor}F
              </span>
            </div>
          </S.Reservation>
        ))}
      </S.ReservationWrapper>
    </S.PageContainer>
  )
}
