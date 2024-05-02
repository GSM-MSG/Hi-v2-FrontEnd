import { get, userQueryKeys, userUrl } from '@/apis'
import { UserProfile } from '@/assets'
import { MyPageType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import ReservationItem from '../ReservationItem'
import * as S from './style'

export default function MyPage() {
  const { data } = useQuery<MyPageType>({
    queryKey: userQueryKeys.my(),
    queryFn: () => get(userUrl.my()),
  })
  const { useStatus, profileImageUrl, name, email, reservations } = data || {}
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
              loading='lazy'
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
          {reservations?.length !== 0 && <span>예약 중</span>}
        </S.ReservationTitle>
        {reservations?.length !== 0 ? (
          reservations?.map((i, idx) => (
            <ReservationItem reservation={i} key={idx} />
          ))
        ) : (
          <S.NoReservation>예약 내역이 존재하지 않습니다. </S.NoReservation>
        )}
      </S.ReservationWrapper>
    </S.PageContainer>
  )
}
