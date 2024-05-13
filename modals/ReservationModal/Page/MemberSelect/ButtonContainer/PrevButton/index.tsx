import { Button } from '@/components'
import { useDeleteReservationStatus, useModal } from '@/hooks'
import React from 'react'

export default function PrevButton() {
  const { closeModal } = useModal()
  const { delReserveStatus } = useDeleteReservationStatus()
  
  const onClose = () => {
    closeModal()
    delReserveStatus()
  }

  return (
    <Button
      width='112px'
      height='52px'
      background='none'
      color='#0066ff'
      fontSize='16px'
      fontWeight='600'
      lineHeight='28px'
      borderRadius='8px'
      border='1px solid #0066ff'
      onClick={onClose}
    >
      돌아가기
    </Button>
  )
}
