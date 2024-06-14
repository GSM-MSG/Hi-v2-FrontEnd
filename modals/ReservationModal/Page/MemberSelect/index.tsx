import { get, userQueryKeys, userUrl } from '@/apis'
import { MemberValue } from '@/atoms'
import { MaxCapacityContext } from '@/contexts'
import { UserItemType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRecoilValue } from 'recoil'
import MemberInput from './MemberInput'
import MemberList from './MemberList'
import ModalTitle from './ModalTitle'
import ShowMemberList from './ShowMemberList'
import ButtonContainer from './ButtonContainer'
import * as S from './style'

export default function MemberSelect({ maxCapacity }: { maxCapacity: number }) {
  const memberValue = useRecoilValue(MemberValue)
  const {
    data: memberList,
    refetch,
    isLoading,
  } = useQuery<UserItemType[], AxiosError>({
    queryKey: userQueryKeys.searchStudent(),
    queryFn: () => get(userUrl.searchStudent(memberValue)),
  })

  return (
    <MaxCapacityContext.Provider value={maxCapacity}>
      <S.MemberSelectContainer>
        <ModalTitle />
        <MemberInput refetch={refetch} />
        <ShowMemberList />
        <MemberList memberList={memberList} isLoading={isLoading} />
        <ButtonContainer />
      </S.MemberSelectContainer>
    </MaxCapacityContext.Provider>
  )
}
