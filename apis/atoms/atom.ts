import { atom } from 'recoil'

export const IsModal = atom<boolean>({ key: 'IsModal', default: true })
export const ModalPage = atom<number>({ key: 'ModalPage', default: 1 })
