import { UserItemType } from '../components'

export interface HomeBaseTypes {
  homeBaseId: string
  floor: number
  period: number
  homeBaseNumber: number
  maxCapacity: number
}

export interface ReservationDataType {
  floor: number
  period: number
  reservationId: string
  reservationNumber: number
  users: UserItemType[]
  checkStatus: boolean
  reason: string
  homeBase: HomeBaseTypes
}
