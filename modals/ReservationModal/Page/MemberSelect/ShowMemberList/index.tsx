import { XMark } from '@/assets';
import { MemberValue, ShowMembers, TeamMembers } from '@/atoms';
import { UserItemType } from '@/types';
import { useRecoilState, useSetRecoilState } from 'recoil';
import * as S from './style';

export default function ShowMemberList() {
  const [showMembers, setShowMembers] = useRecoilState(ShowMembers)
  const setTeamMembers = useSetRecoilState(TeamMembers)
  const setMemberValue = useSetRecoilState(MemberValue)

  const deleteMembers = (member: UserItemType) => {
    setShowMembers((prev) => prev.filter((showMember) => showMember.userId !== member.userId))
    setTeamMembers((prev) => prev.filter((teamMember) => teamMember !== member.userId))
    setMemberValue('')
  }

  return (
    <S.ShowMemberListContainer>
      {showMembers.map((showMember) => (
        <S.ShowMemberBox key={showMember.userId}>
          <span>{showMember.name}</span>
            <div onClick={() => deleteMembers(showMember)}>
              <div style={{ marginTop: '0.125rem' }}>
              <XMark width='11' height='11' />
            </div>
          </div>
        </S.ShowMemberBox>
      ))}
    </S.ShowMemberListContainer>
  );
}