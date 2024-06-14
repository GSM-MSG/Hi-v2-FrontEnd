import { UserItemType } from '@/types/components'
import { ReactNode } from 'react'
import { atom } from 'recoil'

const time7 = new Date()
time7.setHours(15, 30)
const time8 = new Date()
time8.setHours(16, 40)
const time9 = new Date()
time9.setHours(17, 40)
const time10 = new Date()
time10.setHours(19, 30)

const currentPeriod = (): number => {
  const currentTime = new Date()
  if (new Date().getDay() === 1 && currentTime < time7) return 7
  else if (currentTime < time8) return 8
  else if (currentTime < time9) return 9
  else if (currentTime < time10) return 10
  else return 11
}

export const IsModal = atom<ReactNode>({ key: 'IsModal', default: null })

export const ReservationPlace = atom<{ floor: number; period: number }>({
  key: 'Place',
  default: {
    floor: 2,
    period: currentPeriod(),
  },
})

export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })

export const MemberValue = atom<string>({
  key: 'MemberValue',
  default: '',
})

export const ShowMembers = atom<UserItemType[]>({
  key: 'ShowMembers',
  default: [],
})

export const TeamMembers = atom<string[]>({ key: 'TeamMembers', default: [] })

export const ReasonText = atom<string>({ key: 'ReasonText', default: '' })

export const SelectedUser = atom<UserItemType>({
  key: 'SelectedUser',
  default: {
    userId: '',
    email: '',
    name: '',
    schoolNumber: '',
    profileImageUrl: '',
    role: 'ROLE_STUDENT',
    useStatus: 'AVAILABLE',
  },
})
