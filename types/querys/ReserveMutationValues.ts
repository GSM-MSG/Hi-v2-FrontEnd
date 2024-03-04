export interface ReserveMutationValues {
    users: string[],
    reason: string
    reservationNumber: number
}

export type ReserveModifyMutationValues = Omit<ReserveMutationValues, 'reservationNumber'>