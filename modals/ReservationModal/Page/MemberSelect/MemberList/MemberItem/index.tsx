import { UserProfile } from '@/assets'
import { UserItemType } from '@/types'
import Image from 'next/image'
import AddMemberButton from './AddMemberButton'
import * as S from './style'

interface Props {
  member: UserItemType
}

export default function MemberItem({ member }: Props) {
  return (
    <S.MemberBox key={member.userId}>
      <S.MemberContentsBox>
        {member.profileImageUrl && (
          <Image
            src={member.profileImageUrl}
            alt='profileImage'
            width='36'
            height='36'
          />
        )}
        {!member.profileImageUrl.length && <UserProfile />}
        <S.InfoBox>
          {member.schoolNumber}{' '}
          {member.name}
        </S.InfoBox>
      </S.MemberContentsBox>
      <AddMemberButton member={member} />
    </S.MemberBox>
  )
}
