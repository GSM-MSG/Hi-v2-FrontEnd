import { atom } from 'recoil'

export const LoginModal = atom<boolean>({ key: 'LoginModal', default: false })
export const HasLogin = atom<boolean>({ key: 'HasLogin', default: false })
