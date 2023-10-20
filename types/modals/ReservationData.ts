import { UserItemType } from '../UserItemType'

export interface ReservationDataType {
  floor: number
  period: number
  representativeId: string
  reservationId: string
  reservationNumber: number
  homeBaseId: string
  users: UserItemType[]
}
