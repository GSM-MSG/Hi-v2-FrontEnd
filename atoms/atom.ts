import { UserItemType } from '@/types/UserItemType'
import { UserListType } from '@/types/components/UserListType'
import { getStorage } from '@/utils/Storage'
import { atom } from 'recoil'

export const IsModal = atom<boolean>({ key: 'IsModal', default: false })
export const IsRModal = atom<boolean>({ key: 'IsRModal', default: true })
export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })
export const HasLogin = atom<boolean>({
  key: 'HasLogin',
  default: getStorage('hi_accessToken') ? true : false,
})
export const ShowMembers = atom<UserListType[]>({
  key: 'ShowMembers',
  default: [],
})
export const TeamMembers = atom<string[]>({ key: 'TeamMembers', default: [] })
export const ReasonText = atom<string>({ key: 'ReasonText', default: '' })
export const Place = atom<{ floor: string; period: string }>({
  key: 'Place',
  default: { floor: '', period: '' },
})
export const IsStuStateModal = atom<boolean>({
  key: 'IsStuStateModal',
  default: false,
})
export const UserList = atom<UserItemType[]>({
  key: 'UserList',
  default: [],
})
export const SelectedUser = atom<{
  userId: string
  email: string
  name: string
  grade: number
  classNum: number
  number: number
  profileImageUrl: string
  roles: string[]
  useStatus: 'AVAILABLE' | 'UNAVAILABLE'
}>({
  key: 'SelectUser',
  default: {
    classNum: 1,
    email: '',
    grade: 1,
    name: '',
    number: 1,
    profileImageUrl: '',
    userId: '',
    useStatus: 'AVAILABLE',
    roles: [],
  },
})
