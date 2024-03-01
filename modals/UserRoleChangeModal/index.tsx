import { SelectedUser, UserList } from '@/atoms'
import { Button, Portal } from '@/components'
import { useModal } from '@/hooks'
import { UserItemListType } from '@/types'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { SelectedCheck, XMark } from '@/assets'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { get, patch, userQueryKeys, userUrl } from '@/apis'

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
  const { mutate: userListMutate } = useMutation<
    AxiosResponse<UserItemListType>
  >({
    mutationKey: userQueryKeys.list(),
    mutationFn: () => get(userUrl.all()),
    onSuccess(data) {
      setUserList(data.data.users)
    },
  })

  const { mutate: userRoleChange } = useMutation<void, Error, { role: string }>(
    {
      mutationKey: userQueryKeys.changeRole(),
      mutationFn: (role) => patch(userUrl.userRole(selectedUser.userId), role),
      onSuccess: () => {
        userListMutate()
        closeModal()
      },
    }
  )

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.ModalTitleWrapper>
          <span>권한 변경</span>
          <div onClick={closeModal}>
            <XMark />
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
              <SelectedCheck stroke={color} />
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
