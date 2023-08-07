import { atom } from 'recoil'

export const LoginModal = atom<boolean>({ key: 'LoginModal', default: false })
export const IsModal = atom<boolean>({ key: 'IsModal', default: false })
export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })
