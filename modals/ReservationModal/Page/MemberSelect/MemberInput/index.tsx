import { SearchIcon, XMark } from '@/assets'
import { GlobalMaxCapacity, MemberValue, ShowMembers } from '@/atoms'
import { Input } from '@/components'
import { RefetchProps, UserItemType } from '@/types'
import { ChangeEvent, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as S from './style'

const MemberInput = ({ refetch }: RefetchProps<UserItemType[]>) => {
  const [memberValue, setMemberValue] = useRecoilState(MemberValue)
  const globalMaxCapacity = useRecoilValue(GlobalMaxCapacity)
  const showMembers = useRecoilValue(ShowMembers)

  useEffect(() => {
    // 타이머를 저장할 변수
    let delayTimer: NodeJS.Timeout

    // 디바운싱을 구현한 함수
    const delayedFetch = (): void => {
      clearTimeout(delayTimer)
      delayTimer = setTimeout(() => {
        refetch()
      }, 500)
    }
    delayedFetch()

    return () => clearTimeout(delayTimer)
  }, [memberValue, refetch])

  return (
    <S.InputBlock>
      <div className='searchIcon'>
        <SearchIcon />
      </div>
      <Input
        disabled={showMembers.length === globalMaxCapacity - 1 ? true : false}
        placeholder='팀원을 검색하세요.'
        width='100%'
        height='28px'
        border='none'
        autoComplete='new-password'
        value={memberValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMemberValue(e.target.value)
        }
      />
      {memberValue.length > 0 && (
        <div className='cancelIcon' onClick={() => setMemberValue('')}>
          <XMark />
        </div>
      )}
    </S.InputBlock>
  )
}

export default MemberInput
