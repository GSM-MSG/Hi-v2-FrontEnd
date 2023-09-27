import Button from '@/components/common/Button'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { UserItemType } from '@/types/UserItemType'
import Image from 'next/image'

export default function UserItem({ user, useStatus }: UserItemType) {
  const buttonColor = useStatus === 'AVAILABLE' ? '#00A441' : '#C0C0C0'

  return (
    <S.UserItemContainer>
      <S.UserItemWrraper>
        {user.profileImageUrl ? (
          <Image
            src={user.profileImageUrl}
            alt='profileImage'
            width='48'
            height='48'
          />
        ) : (
          <SVG.UserProfile />
        )}
        <S.UserInfo>
          <S.UserName>
            {user.grade}
            {user.classNum}
            {user.number.toString().length === 2
              ? user.number
              : '0' + user.number}{' '}
            {user.name}
          </S.UserName>
          <S.UserEmail>{user.email}</S.UserEmail>
        </S.UserInfo>
      </S.UserItemWrraper>
      <Button
        width='84px'
        height='36px'
        border={`solid 1px ${buttonColor}`}
        borderRadius='8px'
        background='none'
        fontWeight='600'
        color={buttonColor}
      >
        {useStatus === 'AVAILABLE' ? '예약가능' : '예약불가'}
      </Button>
    </S.UserItemContainer>
  )
}
