import { UserProfile } from '@/assets';
import { UserItemType } from '@/types';
import Image from 'next/image';
import AddMemberButton from './AddMemberButton';
import * as S from './style';

interface Props {
  member: UserItemType
}

export default function MemberItem({ member }: Props) {
    return (
      <S.MemberBox key={member.userId}>
        <S.MemeberContentsBox>
                  {member.profileImageUrl !== '' ? (
                    <Image
                      src={member.profileImageUrl}
                      alt='profileImage'
                      width='36'
                      height='36'
                    />
                  ) : (
                    <UserProfile />
                  )}
                  <S.InfoBox>
                    {parseInt(
                      `${member.grade}${member.classNum}${
                        member.number && member.number.toString().padStart(2, '0')
                      }`
                    )}{' '}
                    {member.name}
                  </S.InfoBox>
                </S.MemeberContentsBox>
               <AddMemberButton member={member} />
              </S.MemberBox>
    );
};