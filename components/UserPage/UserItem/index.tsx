import Button from '@/components/common/Button'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { UserItemType } from '@/types/UserItemType'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import { SelectedUser } from '@/atoms/atom'
import useModal from '@/hooks/useModal'
import StudentStateModal from '@/modals/StuStateModal'

export default function UserItem({
  userId,
  email,
  name,
  grade,
  classNum,
  number,
  profileImageUrl,
  roles,
  useStatus,
}: UserItemType) {
  const buttonColor = useStatus === 'AVAILABLE' ? '#00A441' : '#C0C0C0'
  const setSelectedUser = useSetRecoilState(SelectedUser)
  const { openModal } = useModal()

  const roleInfo = {
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

  const getRoleLabel = (roles: string[]) => {
    if (roles.includes('ROLE_ADMIN')) {
      return roleInfo.LABELS.ROLE_ADMIN
    } else if (roles.includes('ROLE_TEACHER')) {
      return roleInfo.LABELS.ROLE_TEACHER
    } else {
      return roleInfo.LABELS.ROLE_STUDENT
    }
  }

  const getRoleColor = (roles: string[]) => {
    if (roles.includes('ROLE_ADMIN')) {
      return roleInfo.COLORS.ROLE_ADMIN
    } else if (roles.includes('ROLE_TEACHER')) {
      return roleInfo.COLORS.ROLE_TEACHER
    } else {
      return roleInfo.COLORS.ROLE_STUDENT
    }
  }

  return (
    <S.UserItemContainer>
      <S.UserItemWrraper>
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt='profileImage'
            width='48'
            height='48'
          />
        ) : (
          <SVG.UserProfile />
        )}
        <S.UserInfo>
          <S.UserName>
            {grade}
            {classNum}
            {number.toString().length === 2 ? number : '0' + number} {name}
          </S.UserName>
          <S.UserEmail>{email}</S.UserEmail>
        </S.UserInfo>
      </S.UserItemWrraper>
      <S.ButtonWrapper>
        <Button
          width='78px'
          height='36px'
          border={`solid 1px ${getRoleColor(roles)}`}
          borderRadius='8px'
          background='none'
          fontWeight='600'
          color={getRoleColor(roles)}
        >
          {getRoleLabel(roles)}
        </Button>
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
              grade,
              classNum,
              number,
              profileImageUrl,
              useStatus,
              roles,
            })
          }}
        >
          {useStatus === 'AVAILABLE' ? '예약가능' : '예약불가'}
        </Button>
      </S.ButtonWrapper>
    </S.UserItemContainer>
  )
}
