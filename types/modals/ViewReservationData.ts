import { UserItemType } from '../components'

export interface ViewReservationData {
  checkStatus: boolean
  reason: string
  reservationId: string
  reservationNumber: number
  users: UserItemType[]
  representativeId: string
}
