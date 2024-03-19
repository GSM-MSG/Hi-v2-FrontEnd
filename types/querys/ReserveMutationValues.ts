export interface ReserveMutationValues {
  users: string[]
  reason: string
}

export type ReserveModifyMutationValues = Omit<
  ReserveMutationValues,
  'reservationNumber'
>
