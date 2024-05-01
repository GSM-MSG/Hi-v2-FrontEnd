import { patch, userQueryKeys, userUrl } from '@/apis'
import { SelectedUser } from '@/atoms'
import { Button, Portal } from '@/components'
import { useModal } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import * as S from './style'

export default function StudentStateModal() {
  const queryClient = useQueryClient()
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()
  const { mutate } = useMutation<
    void,
    AxiosError,
    { status: 'AVAILABLE' | 'UNAVAILABLE' }
  >({
    mutationKey: userQueryKeys.studentStatus(),
    mutationFn: (modifyValue) =>
      patch(userUrl.requestId(selectedUser.userId), modifyValue),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.searchUser() })
      toast.success('예약 상태가 변경되었습니다.')
      closeModal()
    },
    onError: (error) => {
      if (error) {
        const status = error.status
        if (status === 401) toast.error('토큰 값이 이상하거나 변질되었습니다.')
      }
    },
  })

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <p>
          {selectedUser.grade}
          {selectedUser.classNum}
          {selectedUser.number
            ? selectedUser.number.toString().length === 2
              ? selectedUser.number
              : '0' + selectedUser.number
            : ''}{' '}
          {selectedUser.name} 님을{' '}
          {selectedUser.useStatus === 'AVAILABLE' ? '예약불가' : '예약가능'}
          <br />
          하게 하시겠습니까?
        </p>
        <S.ButtonWrapper>
          <Button
            width='130px'
            height='48px'
            background='#fff'
            border='1px solid #0066FF'
            borderRadius='8px'
            color='#0066FF'
            onClick={closeModal}
          >
            취소
          </Button>
          <Button
            width='130px'
            height='48px'
            background='#0066FF'
            border='1px solid #0066FF'
            borderRadius='8px'
            color='#fff'
            onClick={() =>
              mutate({
                status:
                  selectedUser.useStatus === 'AVAILABLE'
                    ? 'UNAVAILABLE'
                    : 'AVAILABLE',
              })
            }
          >
            확인
          </Button>
        </S.ButtonWrapper>
      </S.ModalContainer>
    </Portal>
  )
}
