import {
    Button,
    ButtonContainer,
    CheckModalContainer,
    Portal,
} from '@/components'
import { useModal } from '@/hooks'

export default function AllDeleteTableCheckModal({
  onDelete,
}: {
  onDelete: () => void
}) {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <CheckModalContainer>
        <h2>전체삭제</h2>
        <p>정말로 모든 테이블을 삭제하시겠습니까?</p>
        <ButtonContainer>
          <Button
            width='142px'
            height='48px'
            background='none'
            color='#c0c0c0'
            border='1px solid #c0c0c0'
            borderRadius='8px'
            onClick={closeModal}
          >
            취소
          </Button>
          <Button
            width='142px'
            height='48px'
            background='#0066ff'
            color='#ffffff'
            border='none'
            borderRadius='8px'
            onClick={onDelete}
          >
            확인
          </Button>
        </ButtonContainer>
      </CheckModalContainer>
    </Portal>
  )
}
