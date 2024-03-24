import { UserItemType } from '../components'
import { HomeBaseTypes } from './ReservationData'

export interface ViewReservationDataResponseTypes {
  users: UserItemType[]
  reason: string
  checkStatus: boolean
  homeBase: HomeBaseTypes
}
