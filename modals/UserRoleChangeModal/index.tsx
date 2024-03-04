import { get, patch, userQueryKeys, userUrl } from '@/apis'
import { SelectedCheck, XMark } from '@/assets'
import { SelectedUser } from '@/atoms'
import { Button, Portal } from '@/components'
import { useModal } from '@/hooks'
import { UserItemListType } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import * as S from './style'

export default function UserRoleChangeModal() {
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()
  const [selectedRole, setSelectedRole] = useState('')

  const roleInfo = [
    { role: '학생', color: '#2E80CC', label: 'ROLE_STUDENT' },
    { role: '선생님', color: '#FF3838', label: 'ROLE_TEACHER' },
    { role: '관리자', color: '#FF9B05', label: 'ROLE_ADMIN' },
  ]
  const { refetch } = useQuery<AxiosResponse<UserItemListType>>({
    queryKey: userQueryKeys.searchUser(),
  })

  const { mutate } = useMutation<void, Error, { role: string }>({
    mutationKey: userQueryKeys.changeRole(),
    mutationFn: (modifyValue) =>
      patch(userUrl.userRole(selectedUser.userId), modifyValue),
    onSuccess: () => {
      toast.success('권한을 변경했습니다')
      refetch()
      closeModal()
    },
  })

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
          {roleInfo.map(({ role, color, label }, idx) => (
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
          onClick={() =>
            mutate({
              role: `${selectedRole}`,
            })
          }
        >
          확인
        </Button>
      </S.ModalContainer>
    </Portal>
  )
}
