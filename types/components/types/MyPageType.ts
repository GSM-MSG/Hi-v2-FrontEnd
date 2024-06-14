import { HomeBaseTypes } from '@/types'
import { UserItemType } from './UserItemType'

export interface ReservationItemType {
  reservationId: string
  users: UserItemType[]
  checkStatus: boolean
  homeBase: HomeBaseTypes
}

export type ReservationListType = ReservationItemType[]

export interface MyPageType extends UserItemType {
  reservations: ReservationListType
}
