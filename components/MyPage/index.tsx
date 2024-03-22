import { UserProfile } from '@/assets'
import Image from 'next/image'
import * as S from './style'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { get, userQueryKeys, userUrl } from '@/apis'
import ReservationItem from '../ReservationItem'
import { MyPageType } from '@/types'

export default function MyPage() {
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
          {reservations?.length !== 0 && <span>예약 중</span>}
        </S.ReservationTitle>
        {reservations?.map((i, idx) => (
          <ReservationItem reservation={i} key={idx} />
        ))}
      </S.ReservationWrapper>
    </S.PageContainer>
  )
}
