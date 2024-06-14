import { InfoProfile } from '@/assets'
import { SelectedUser } from '@/atoms'
import { Button } from '@/components'
import { useGetRole, useModal } from '@/hooks'
import { StudentStateModal, UserRoleChangeModal } from '@/modals'
import { RoleTypes, UserItemType } from '@/types'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import * as S from './style'

const roleInfo: {
  LABELS: Record<RoleTypes, string>
  COLORS: Record<RoleTypes, string>
} = {
  LABELS: {
    ROLE_ADMIN: '관리자',
    ROLE_TEACHER: '선생님',
    ROLE_STUDENT: '학생',
  },
  COLORS: {
    ROLE_ADMIN: '#FF9B05',
    ROLE_TEACHER: '#FF3838',
    ROLE_STUDENT: '#2E80CC',
  },
}

export default function UserItem({
  userId,
  email,
  name,
  schoolNumber,
  profileImageUrl,
  role,
  useStatus,
}: UserItemType) {
  const buttonColor = useStatus === 'AVAILABLE' ? '#00A441' : '#C0C0C0'
  const setSelectedUser = useSetRecoilState(SelectedUser)
  const { openModal } = useModal()
  const { isAdmin } = useGetRole()

  const getRoleLabel = (role: RoleTypes) => {
    if (role === 'ROLE_ADMIN') {
      return roleInfo.LABELS.ROLE_ADMIN
    } else if (role === 'ROLE_TEACHER') {
      return roleInfo.LABELS.ROLE_TEACHER
    } else {
      return roleInfo.LABELS.ROLE_STUDENT
    }
  }

  const getRoleColor = (role: RoleTypes) => {
    if (role === 'ROLE_ADMIN') {
      return roleInfo.COLORS.ROLE_ADMIN
    } else if (role === 'ROLE_TEACHER') {
      return roleInfo.COLORS.ROLE_TEACHER
    } else {
      return roleInfo.COLORS.ROLE_STUDENT
    }
  }

  return (
    <S.UserItemContainer>
      <S.UserItemWrapper>
        <S.UserProfileContainer>
          {profileImageUrl ? (
            <Image
              width={48}
              height={48}
              src={profileImageUrl}
              alt='profileImage'
              objectFit='cover'
            />
          ) : (
            <InfoProfile />
          )}
        </S.UserProfileContainer>
        <S.UserInfo>
          <S.UserName>
            {schoolNumber}{' '}
            {name}
          </S.UserName>
          <S.UserEmail>{email}</S.UserEmail>
        </S.UserInfo>
      </S.UserItemWrapper>
      <S.ButtonWrapper>
        {isAdmin && (
          <Button
            width='78px'
            height='36px'
            border={`1px solid ${getRoleColor(role)}`}
            background='none'
            fontWeight='600'
            borderRadius='8px'
            color={getRoleColor(role)}
            onClick={() => {
              openModal(<UserRoleChangeModal />)
              setSelectedUser({
                userId,
                email,
                name,
                schoolNumber,
                profileImageUrl,
                useStatus,
                role,
              })
            }}
          >
            {getRoleLabel(role)}
          </Button>
        )}
        <Button
          width='84px'
          height='36px'
          border={`solid 1px ${buttonColor}`}
          borderRadius='8px'
          background='none'
          fontWeight='600'
          color={buttonColor}
          onClick={() => {
            openModal(<StudentStateModal />)
            setSelectedUser({
              userId,
              email,
              name,
              schoolNumber,
              profileImageUrl,
              useStatus,
              role,
            })
          }}
        >
          {useStatus === 'AVAILABLE' ? '예약가능' : '예약불가'}
        </Button>
      </S.ButtonWrapper>
    </S.UserItemContainer>
  )
}
