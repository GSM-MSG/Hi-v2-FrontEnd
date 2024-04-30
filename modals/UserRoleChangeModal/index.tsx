import { patch, userQueryKeys, userUrl } from '@/apis'
import { SelectedCheck } from '@/assets'
import { SelectedUser } from '@/atoms'
import { Button, Portal } from '@/components'
import { useModal } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const roleInfo = [
  { role: '학생', color: '#2E80CC', label: 'ROLE_STUDENT' },
  { role: '선생님', color: '#FF3838', label: 'ROLE_TEACHER' },
  { role: '관리자', color: '#FF9B05', label: 'ROLE_ADMIN' },
]

export default function UserRoleChangeModal() {
  const queryClient = useQueryClient()
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()
  const [selectedRole, setSelectedRole] = useState('')
  const { mutate } = useMutation<void, Error, { role: string }>({
    mutationKey: userQueryKeys.changeRole(),
    mutationFn: (modifyValue) =>
      patch(userUrl.userRole(selectedUser.userId), modifyValue),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.searchUser() })
      queryClient.invalidateQueries({ queryKey: userQueryKeys.myRole() })
      closeModal()
      toast.success('권한을 변경했습니다')
    },
  })

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.ModalTitleWrapper>
          <span>권한 변경</span>
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
          fontSize='16px'
          fontWeight='500'
          lineHeight='28px'
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
