import { UserItemType } from '../UserItemType'

export interface ViewReservationData {
  checkStatus: boolean
  reason: string
  reservationId: string
  reservationNumber: number
  users: UserItemType[]
  representativeId: string
}
