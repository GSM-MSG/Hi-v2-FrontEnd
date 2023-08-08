import { IsModal } from '@/atoms/atom'
import React from 'react'
import { useRecoilValue } from 'recoil'
import ReservationModal from './ReservationModal'

function ReservationPage() {
  const isModal = useRecoilValue(IsModal)
  return <>{isModal && <ReservationModal />}</>
}

export default ReservationPage
