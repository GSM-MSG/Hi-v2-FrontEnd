import { get, userQueryKeys, userUrl } from '@/apis'
import { GlobalMaxCapacity, MemberValue, ModalPage, ShowMembers } from '@/atoms'
import { useDeleteReservationStatus, useModal } from '@/hooks'
import { UserItemType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ButtonContainer } from '../Completed/style'
import MemberInput from './MemberInput'
import MemberList from './MemberList'
import ModalTitle from './ModalTitle'
import ShowMemberList from './ShowMemberList'
import * as S from './style'

export default function MemberSelect({ maxCapacity }: { maxCapacity: number }) {
  const memberValue = useRecoilValue(MemberValue)
  const setGlobalMaxCapacity = useSetRecoilState(GlobalMaxCapacity)
  const { data: memberList, refetch, isLoading } = useQuery<UserItemType[], AxiosError>({
    queryKey: userQueryKeys.searchStudent(),
    queryFn: () => get(userUrl.searchStudent(memberValue)),
  })

  useEffect(() => {
    setGlobalMaxCapacity(maxCapacity)
  }, [maxCapacity, setGlobalMaxCapacity])

  return (
    <S.MemberSelectContainer>
      <ModalTitle />
      <MemberInput refetch={refetch} />
      <ShowMemberList />
      <MemberList memberList={memberList} isLoading={isLoading} />
      <ButtonContainer />
    </S.MemberSelectContainer>
  )
}