import {
  MemberValue,
  ShowMembers,
  TeamMembers,
} from '@/atoms'
import { Button } from '@/components'
import { MaxCapacityContext } from '@/contexts'
import { useGetRole } from '@/hooks'
import { UserItemType } from '@/types'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useSetRecoilState } from 'recoil'

interface Props {
  member: UserItemType
}

export default function AddMemberButton({ member }: Props) {
  const { userId } = useGetRole()
  const maxCapacityContext = useContext(MaxCapacityContext)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)
  const [showMembers, setShowMembers] = useRecoilState(ShowMembers)
  const setMemberValue = useSetRecoilState(MemberValue)

  const addMembers = (member: UserItemType) => {
    if (teamMembers.includes(member.userId)) {
      return toast.warning('이미 포함된 멤버입니다')
    } else if (member.userId === userId) {
      return toast.warning('본인을 제외한 멤버를 선택해주세요')
    } else if (showMembers.length === maxCapacityContext - 1) {
      return toast.warning('테이블 최대 인원입니다')
    }

    setShowMembers((prev) => [...prev, member])
    setTeamMembers((prev) => [...prev, member.userId])
    setMemberValue('')
  }

  return (
    <Button
      background='none'
      border='1px solid #0066ff'
      borderRadius='4px'
      color='#0066ff'
      width='3.5rem'
      height='1.8rem'
      fontSize='14px'
      fontWeight='500'
      hoverBackground='#0066ff'
      hoverBorder='none'
      hoverColor='#ffffff'
      onClick={() => {
        addMembers(member)
      }}
      disabled={member.useStatus === 'AVAILABLE' ? false : true}
    >
      <span>선택</span>
    </Button>
  )
}
