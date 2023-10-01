import Portal from '@/components/Portal'
import * as S from './style'
import { IsStuStateModal, SelectedUser } from '@/atoms/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Button from '@/components/common/Button'
import useFetch from '@/hooks/useFetch'

export default function StuState({ userlistRefetch }: any) {
  const setIsStuStateModal = useSetRecoilState<boolean>(IsStuStateModal)
  const selectedUser = useRecoilValue(SelectedUser)
  const onClose = () => {
    setIsStuStateModal(false)
  }

  const { fetch } = useFetch({
    url: `/user/${selectedUser.userId}`,
    method: 'patch',
    onSuccess: () => onClose(),
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
    <Portal onClose={onClose}>
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
          <br />로 변경하시겠습니까?
        </p>
        <S.ButtonWrapper>
          <Button
            width='120px'
            height='44px'
            background='#fff'
            border='1px solid #0066FF'
            borderRadius='8px'
            color='#0066FF'
            onClick={onClose}
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
