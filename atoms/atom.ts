import { UserItemType } from '@/types/UserItemType'
import { getStorage } from '@/utils/Storage'
import { atom } from 'recoil'

export const IsModal = atom<boolean>({ key: 'IsModal', default: false })
export const IsRModal = atom<boolean>({ key: 'IsRModal', default: true })
export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })
export const HasLogin = atom<boolean>({
  key: 'HasLogin',
  default: getStorage('hi_accessToken') ? true : false,
})
export const ShowMembers = atom<UserItemType[]>({
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
  },
})
