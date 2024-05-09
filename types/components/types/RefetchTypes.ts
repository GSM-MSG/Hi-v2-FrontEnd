import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type RefetchType<T> = (
  options?: RefetchOptions | undefined
) => Promise<QueryObserverResult<T, AxiosError<unknown, any>>>

export interface RefetchProps<T> {
  refetch: RefetchType<T>
}
