import Portal from '@/components/Portal'
import * as S from './style'
import { SelectedUser, UserList } from '@/atoms/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Button from '@/components/commons/Button'
import useFetch from '@/hooks/useFetch'
import useModal from '@/hooks/useModal'
import { UserItemListType } from '@/types/UserItemListType'

export default function StudentStateModal() {
  const setUserList = useSetRecoilState(UserList)
  const selectedUser = useRecoilValue(SelectedUser)
  const { closeModal } = useModal()

  const { fetch: userlistRefetch } = useFetch<UserItemListType>({
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

  const chageStudentState = async () => {
    await fetch({
      status:
        selectedUser.useStatus === 'AVAILABLE' ? 'UNAVAILABLE' : 'AVAILABLE',
    })
    await userlistRefetch()
  }

  return (
    <Portal onClose={closeModal}>
      <S.ModalConatiner>
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
            onClick={chageStudentState}
          >
            확인
          </Button>
        </S.ButtonWrapper>
      </S.ModalConatiner>
    </Portal>
  )
}
