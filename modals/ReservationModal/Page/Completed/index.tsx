import { homebaseQueryKeys } from '@/apis'
import { CompletedImg } from '@/assets'
import { Button } from '@/components'
import { useDeleteReservationStatus, useModal } from '@/hooks'
import { useQueryClient } from '@tanstack/react-query'
import * as S from './style'

export default function Completed({ isModify }: { isModify: boolean }) {
  const { closeModal } = useModal()
  const { delReserveStatus } = useDeleteReservationStatus()
  const queryClient = useQueryClient()

  return (
    <S.CompletedContainer>
      <S.ShowCompleted>
        <CompletedImg />
        <h2>{isModify ? '수정이' : '예약이'} 완료되었습니다.</h2>
      </S.ShowCompleted>
      <S.ButtonContainer>
        <Button
          width='100%'
          height='52px'
          background='#0066ff'
          color='#ffffff'
          fontSize='16px'
          fontWeight='600'
          lineHeight='28px'
          border='none'
          borderRadius='8px'
          onClick={async () => {
            queryClient.invalidateQueries({
              queryKey: homebaseQueryKeys.list(),
            })
            delReserveStatus()
            closeModal()
          }}
        >
          확인
        </Button>
      </S.ButtonContainer>
    </S.CompletedContainer>
  )
}
