import { UserItemType } from '@/types/components'
import { ReactNode } from 'react'
import { atom } from 'recoil'

export const IsModal = atom<ReactNode>({ key: 'IsModal', default: null })

export const ReservationPlace = atom<{ floor: number; period: number }>({
  key: 'Place',
  default: { floor: 2, period: 8 },
})

export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })

export const ShowMembers = atom<UserItemType[]>({
  key: 'ShowMembers',
  default: [],
})

export const TeamMembers = atom<string[]>({ key: 'TeamMembers', default: [] })

export const ReasonText = atom<string>({ key: 'ReasonText', default: '' })

export const UserList = atom<UserItemType[]>({
  key: 'UserList',
  default: [],
})

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
    roles: [],
    useStatus: 'AVAILABLE',
    role: {},
  },
})
