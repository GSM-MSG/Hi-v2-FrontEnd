import { UserListType } from '@/types/components/UserListType'
import { getStorage } from '@/utils/Storage'
import { atom } from 'recoil'

export const IsModal = atom<boolean>({ key: 'IsModal', default: false })
export const IsRModal = atom<boolean>({ key: 'IsRModal', default: false })
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
