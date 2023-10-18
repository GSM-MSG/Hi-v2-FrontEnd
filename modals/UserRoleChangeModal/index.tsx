import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { IsModal, SelectedUser, UserList } from '@/atoms/atom'
import useModal from '@/hooks/useModal'
import { UserItemListType } from '@/types/UserItemListType'
import useFetch from '@/hooks/useFetch'
import Portal from '@/components/Portal'
import * as SVG from '@/assets/svg'
import { ReactNode, useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import { useRouter } from 'next/router'

export default function UserRoleChangeModal() {
  const setUserList = useSetRecoilState(UserList)
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()
  const [selectRole, setSelectRole] = useState('')

  const Array = [
    { role: '학생', color: '#2E80CC', label: 'ROLE_STUDENT' },
    { role: '선생님', color: '#FF3838', label: 'ROLE_TEACHER' },
    { role: '관리자', color: '#FF9B05', label: 'ROLE_ADMIN' },
  ]

  const { fetch: userlistRefetch } = useFetch<UserItemListType>({
    url: '/user/students',
    method: 'get',
    onSuccess: (data) => {
      setUserList(data.student)
      closeModal()
    },
  })

  const { fetch: userRoleChange } = useFetch({
    url: `/user/${selectedUser.userId}/role`,
    method: 'patch',
    onSuccess: () => userlistRefetch(),
  })

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.ModalTitleWrapper>
          <span>권한 변경</span>
          <div onClick={closeModal}>
            <SVG.XMark />
          </div>
        </S.ModalTitleWrapper>
        <S.RoleButtonWrapper>
          {Array.map(({ role, color, label }, idx) => (
            <S.RoleButtonItem
              key={idx}
              color={color}
              onClick={() => setSelectRole(`${label}`)}
            >
              {role}
            </S.RoleButtonItem>
          ))}
        </S.RoleButtonWrapper>
        <Button
          width='100%'
          height='50px'
          background='#0066FF'
          borderRadius='8px'
          border='none'
          color='#fff'
          onClick={() =>
            userRoleChange({
              role: `${selectRole}`,
            })
          }
        >
          확인
        </Button>
      </S.ModalContainer>
    </Portal>
  )
}
