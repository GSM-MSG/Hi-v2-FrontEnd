import { GlobalMaxCapacity } from '@/atoms'
import { UserItemType } from '@/types'
import { useRecoilValue } from 'recoil'
import MemberItem from './MemberItem'
import NotMemberText from './NotMemberText'
import * as S from './style'

interface Props {
  isLoading: boolean
  memberList: UserItemType[] | undefined
}

const sortedMemberList = (a: UserItemType, b: UserItemType): number => {
  const aStudentNum = parseInt(
    `${a.grade}${a.classNum}${a.number && a.number.toString().padStart(2, '0')}`
  )
  const bStudentNum = parseInt(
    `${b.grade}${b.classNum}${b.number && b.number.toString().padStart(2, '0')}`
  )

  return aStudentNum - bStudentNum
}

export default function MemberList({ isLoading, memberList }: Props) {
  return (
    <>
      <NotMemberText isLoading={isLoading} length={memberList?.length} />
      {memberList?.length && (
        <S.MemberListContainer>
          {memberList
            ?.sort((a, b) => sortedMemberList(a, b))
            .map((member) => (
              <MemberItem key={member.userId} member={member} />
            ))}
        </S.MemberListContainer>
      )}
    </>
  )
}
