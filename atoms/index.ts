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
const currentTime = new Date()
const is7Period = new Date().getDay() === 1 && currentTime < time7
const is8Period = currentTime < time8
const is9Period = currentTime < time9
const is10Period = currentTime < time10

export const IsModal = atom<ReactNode>({ key: 'IsModal', default: null })

export const ReservationPlace = atom<{ floor: number; period: number }>({
  key: 'Place',
  default: {
    floor: 2,
    period: is7Period
      ? 7
      : is8Period
      ? 8
      : is9Period
      ? 9
      : is10Period
      ? 10
      : 11,
  },
})

export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })

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
    grade: 1,
    classNum: 1,
    number: 1,
    profileImageUrl: '',
    role: 'ROLE_STUDENT',
    useStatus: 'AVAILABLE',
  },
})
