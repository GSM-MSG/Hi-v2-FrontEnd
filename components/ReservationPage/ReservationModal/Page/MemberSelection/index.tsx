import * as SVG from '@/assets/svg'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/common/Modal/Title'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ModalPage, ShowMembers, TeamMembers } from '@/atoms/atom'
import * as S from './style'
import Button from '@/components/common/Button'
import { useRecoilState, useSetRecoilState } from 'recoil'
import useFetch from '@/hooks/useFetch'
import { UserListType } from '@/types/components/UserListType'
import { toast } from 'react-toastify'

function MemberSelection() {
  const setModalPage = useSetRecoilState(ModalPage)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)
  const [showMembers, setShowMembers] = useRecoilState(ShowMembers)
  const form = useForm({ defaultValues: { member: '' } })
  const { register, watch, setValue } = form
  const { isLoading, fetch, data } = useFetch<UserListType[]>({
    url: `/user/search?keyword=${watch('member')}`,
    method: 'get',
  })

  useEffect(() => {
    if (!watch('member').trim()) return

    const delayFetch = setTimeout(() => {
      fetch()
    }, 2000)

    return () => clearTimeout(delayFetch)
  }, [fetch, watch])

  const addMembers = (member: UserListType) => {
    if (teamMembers.includes(member.userId))
      return toast.error('중복된 팀원입니다.')
    setShowMembers((prev) => [...prev, member])
    setTeamMembers((prev) => [...prev, member.userId])
    setValue('member', '')
  }

  const deleteMembers = (member: UserListType) => {
    const filteredShowMembers = showMembers.filter((item) => item !== member)
    const filteredTeamMembers = teamMembers.filter(
      (item) => item !== member.userId
    )

    setShowMembers(filteredShowMembers)
    setTeamMembers(filteredTeamMembers)
    setValue('member', '')
  }

  const onNext = () => {
    if (showMembers.length === 0) return toast.error('팀원을 골라주세요.')
    setModalPage(2)
  }

  return (
    <S.MemberSelectionContainer>
      <TitleBox>
        <Title>
          팀원선택 <span />
        </Title>
        <PageToggleBox>
          <div className='currentToggle'></div>
          <div></div>
        </PageToggleBox>
      </TitleBox>
      <SubTitle>같이할 팀원을 선택해주세요.</SubTitle>
      <S.InputBlock>
        <div className='searchIcon'>
          <SVG.SearchIcon />
        </div>
        <S.ShowMemberListBox>
          {showMembers.map((showMember) => (
            <S.ShowMemberBox key={showMember.userId}>
              <span>{showMember.name}</span>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => deleteMembers(showMember)}
              >
                <SVG.CancelXMark />
              </div>
            </S.ShowMemberBox>
          ))}
        </S.ShowMemberListBox>
        <S.Input
          disabled={showMembers.length === 4 ? true : false}
          placeholder='팀원을 검색하세요.'
          {...register('member')}
        />
        {watch('member').length > 0 && (
          <div className='cancelIcon' onClick={() => setValue('member', '')}>
            <SVG.SmallXMark />
          </div>
        )}
      </S.InputBlock>

      {isLoading ? (
        <span>팀원을 찾고 있습니다.</span>
      ) : (
        <S.MemberListBox>
          {watch('member')?.trim() &&
            data
              ?.sort((a, b) => {
                const aStudentNum = parseInt(
                  `${a.grade}${a.classNum}${a.number
                    .toString()
                    .padStart(2, '0')}`
                )
                const bStudentNum = parseInt(
                  `${b.grade}${b.classNum}${b.number
                    .toString()
                    .padStart(2, '0')}`
                )

                return aStudentNum - bStudentNum
              })
              .map((item) => (
                <S.MemberBox key={item.userId}>
                  <S.InfoBox>
                    <SVG.UserProfile />
                    <div>
                      <span>
                        {parseInt(
                          `${item.grade}${item.classNum}${item.number
                            .toString()
                            .padStart(2, '0')}`
                        )}
                      </span>
                      <span>{item.name}</span>
                    </div>
                  </S.InfoBox>
                  <Button
                    background='none'
                    border='1px solid #0066ff'
                    borderRadius='6px'
                    color='#0066ff'
                    width='3.5rem'
                    height='1.8rem'
                    fontSize='0.9rem'
                    fontWeight='500'
                    hoverBackground='#0066ff'
                    hoverBorder='none'
                    hoverColor='#ffffff'
                    onClick={() => addMembers(item)}
                  >
                    선택
                  </Button>
                </S.MemberBox>
              ))}
        </S.MemberListBox>
      )}

      <Button
        width='100%'
        height='3rem'
        background='#0066ff'
        color='#ffffff'
        fontSize='1rem'
        fontWeight='500'
        border='none'
        borderRadius='8px'
        onClick={onNext}
      >
        다음으로
      </Button>
    </S.MemberSelectionContainer>
  )
}

export default MemberSelection
