import { UserItemType } from '../components'

export interface ReservationDataType {
  floor: number
  period: number
  reservationId: string
  reservationNumber: number
  homeBaseId: string
  users: UserItemType[]
  checkStatus: boolean
}
