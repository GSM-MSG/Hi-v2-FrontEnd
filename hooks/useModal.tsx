import { IsModal } from '@/atoms'
import { ReactNode } from 'react'
import { useSetRecoilState } from 'recoil'

export default function useModal() {
  const setIsModal = useSetRecoilState<ReactNode>(IsModal)

  const openModal = (modalData: ReactNode) => setIsModal(modalData)

  const closeModal = () => setIsModal(null)

  return { openModal, closeModal }
}
