import { UserItemType } from '@/types'
import MemberItem from './MemberItem'
import NotMemberText from './NotMemberText'
import * as S from './style'

interface Props {
  isLoading: boolean
  memberList: UserItemType[] | undefined
}

export default function MemberList({ isLoading, memberList }: Props) {
  return (
    <>
      <NotMemberText isLoading={isLoading} length={memberList?.length} />
      {memberList?.length && (
        <S.MemberListContainer>
          {memberList
            ?.sort((a, b) => Number(a.schoolNumber) - Number(b.schoolNumber))
            .map((member) => (
              <MemberItem key={member.userId} member={member} />
            ))}
        </S.MemberListContainer>
      )}
    </>
  )
}
