import { UserItemType } from "../components"
import { ViewReservationDataTypes } from "./ViewReservationDataTypes"

export interface ViewReservationDataProps {
  ViewReservationDataColumns: ViewReservationDataTypes[]
  users: UserItemType[] | undefined
}
