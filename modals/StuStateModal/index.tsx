import {Portal, Button} from '@/components'
import * as S from './style'
import { SelectedUser, UserList } from '@/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {useFetch, useModal} from '@/hooks'
import { UserItemListType } from '@/types'

export default function StudentStateModal() {
  const setUserList = useSetRecoilState(UserList)
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()

  const { fetch: userListRefetch } = useFetch<UserItemListType>({
    url: '/user/all',
    method: 'get',
    onSuccess: (data) => {
      setUserList(data.users)
    },
  })

  const { fetch } = useFetch({
    url: `/user/${selectedUser.userId}`,
    method: 'patch',
    onSuccess: closeModal,
    successMessage: '예약 상태가 변경되었습니다.',
    errorMessage: {
      401: '토큰 값이 이상하거나 변질되었습니다.',
    },
  })

  const changeStudentState = async () => {
    await fetch({
      status:
        selectedUser.useStatus === 'AVAILABLE' ? 'UNAVAILABLE' : 'AVAILABLE',
    })
    await userListRefetch()
  }

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <p>
          {selectedUser.grade}
          {selectedUser.classNum}
          {selectedUser.number.toString().length === 2
            ? selectedUser.number
            : '0' + selectedUser.number}{' '}
          {selectedUser.name}
          님을{' '}
          {selectedUser.useStatus === 'AVAILABLE'
            ? '예약불가 상태'
            : '예약가능 상태'}
          로<br />
          변경하시겠습니까?
        </p>
        <S.ButtonWrapper>
          <Button
            width='120px'
            height='44px'
            background='#fff'
            border='1px solid #0066FF'
            borderRadius='8px'
            color='#0066FF'
            onClick={closeModal}
          >
            취소
          </Button>
          <Button
            width='120px'
            height='44px'
            background='#0066FF'
            border='1px solid #0066FF'
            borderRadius='8px'
            color='#fff'
            onClick={changeStudentState}
          >
            확인
          </Button>
        </S.ButtonWrapper>
      </S.ModalContainer>
    </Portal>
  )
}
