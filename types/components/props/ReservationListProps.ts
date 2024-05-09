import { ReservationDataType } from '@/types'

export interface ReservationListProps {
  isLoading: boolean
  reservationList: ReservationDataType[] | undefined
}
