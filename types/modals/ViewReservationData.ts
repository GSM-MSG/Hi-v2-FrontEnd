import { UserItemType } from '../components'
import { HomeBaseTypes } from './ReservationData'

export interface ViewReservationData {
  users: UserItemType[]
  reason: string
  checkStatus: boolean
  homeBase: HomeBaseTypes
}
