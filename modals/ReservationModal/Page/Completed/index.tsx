import { homebaseQueryKeys } from '@/apis'
import { CompletedImg } from '@/assets'
import { Button } from '@/components'
import { useDeleteReservationStatus, useModal } from '@/hooks'
import { useQuery } from '@tanstack/react-query'
import * as S from './style'

export default function Completed({ isModify }: { isModify: boolean }) {
  const { closeModal } = useModal()
  const { delReserveStatus } = useDeleteReservationStatus()
  const { refetch } = useQuery({
    queryKey: homebaseQueryKeys.list(),
  })

  return (
    <S.CompletedContainer>
      <S.ShowCompleted>
        <CompletedImg />
        <h2>{isModify ? '수정이' : '예약이'} 완료되었습니다.</h2>
      </S.ShowCompleted>
      <S.ButtonContainer>
        <Button
          width='100%'
          height='3rem'
          background='#0066ff'
          color='#ffffff'
          fontSize='1rem'
          fontWeight='500'
          border='none'
          borderRadius='8px'
          onClick={async () => {
            refetch()
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
