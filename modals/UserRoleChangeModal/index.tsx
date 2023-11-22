import * as SVG from '@/assets/svg'
import { SelectedUser, UserList } from '@/atoms/atom'
import { Button } from '@/components/commons'
import Portal from '@/components/Portal'
import useFetch from '@/hooks/useFetch'
import useModal from '@/hooks/useModal'
import { UserItemListType } from '@/types/components'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'

export default function UserRoleChangeModal() {
  const setUserList = useSetRecoilState(UserList)
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()
  const [selectedRole, setSelectedRole] = useState('')

  const Array = [
    { role: '학생', color: '#2E80CC', label: 'ROLE_STUDENT' },
    { role: '선생님', color: '#FF3838', label: 'ROLE_TEACHER' },
    { role: '관리자', color: '#FF9B05', label: 'ROLE_ADMIN' },
  ]

  const { fetch: userlistRefetch } = useFetch<UserItemListType>({
    url: '/user/all',
    method: 'get',
    onSuccess: (data) => {
      setUserList(data.users)
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
              onClick={() => {
                setSelectedRole(`${label}`)
              }}
              isClicked={selectedRole === label}
            >
              <SVG.SelectedCheck stroke={color} />
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
          onClick={() => {
            userRoleChange({
              role: `${selectedRole}`,
            })
          }}
        >
          확인
        </Button>
      </S.ModalContainer>
    </Portal>
  )
}
