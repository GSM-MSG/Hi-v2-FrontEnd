import { ModalPage, ShowMembers, TeamMembers } from '@/atoms'
import {
  Button,
  Input,
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components'
import { useFetch } from '@/hooks'
import { GetRoleType, UserItemType } from '@/types'
import Image from 'next/image'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './style'
import { SearchIcon, UserProfile, XMark } from '@/assets'

function MemberSelect() {
  const setModalPage = useSetRecoilState(ModalPage)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)
  const [showMembers, setShowMembers] = useRecoilState(ShowMembers)
  const form = useForm({ defaultValues: { member: '' } })
  const { register, watch, setValue } = form
  const { isLoading, fetch, data } = useFetch<UserItemType[]>({
    url: `/user/search-student?keyword=${watch('member')}`,
    method: 'get',
  })

  const { fetch: fetchRole, data: roleData } = useFetch<GetRoleType>({
    url: '/user/my-role',
    method: 'get',
  })

  useEffect(() => {
    ;(async () => await fetchRole())()
  }, [fetchRole])

  useEffect(() => {
    if (!watch('member').trim()) return

    const delayFetch = setTimeout(() => {
      fetch()
    }, 1000)

    return () => clearTimeout(delayFetch)
  }, [fetch, watch])

  const addMembers = (member: UserItemType) => {
    if (teamMembers.includes(member.userId)) {
      return toast.warning('이미 포함된 멤버입니다')
    } else if (member.userId === roleData?.userId) {
      return toast.warning('자신을 제외한 멤버를 선택해주세요')
    }
    setShowMembers((prev) => [...prev, member])
    setTeamMembers((prev) => [...prev, member.userId])
    setValue('member', '')
  }

  const deleteMembers = (member: UserItemType) => {
    const filteredShowMembers = showMembers.filter((prev) => prev !== member)
    const filteredTeamMembers = teamMembers.filter(
      (prev) => prev !== member.userId
    )

    setShowMembers(filteredShowMembers)
    setTeamMembers(filteredTeamMembers)
    setValue('member', '')
  }

  const onNext = () => {
    if (showMembers.length < 1)
      return toast.warning('최소 1명이상의 팀원을 등록해주세요')
    setModalPage(2)
  }

  return (
    <S.MemberSelectContainer>
      <TitleBox>
        <Title>
          팀원선택 <span />
        </Title>
        <PageToggleBox>
          <div className='currentToggle' />
          <div />
        </PageToggleBox>
      </TitleBox>
      <SubTitle>같이할 팀원을 선택해주세요.</SubTitle>
      <S.InputBlock>
        <div className='searchIcon'>
          <SearchIcon />
        </div>
        <Input
          disabled={showMembers.length === 5 ? true : false}
          placeholder='팀원을 검색하세요.'
          width='100%'
          height='2rem'
          fontSize='1rem'
          border='none'
          autoComplete='new-password'
          {...register('member')}
        />
        {watch('member').length > 0 && (
          <div className='cancelIcon' onClick={() => setValue('member', '')}>
            <XMark />
          </div>
        )}
      </S.InputBlock>
      <S.ShowMemberListBox>
        {showMembers.map((showMember) => (
          <S.ShowMemberBox key={showMember.userId}>
            <span>{showMember.name}</span>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => deleteMembers(showMember)}
            >
              <div style={{ marginTop: '0.125rem' }}>
                <XMark width='11' height='11' />
              </div>
            </div>
          </S.ShowMemberBox>
        ))}
      </S.ShowMemberListBox>
      {isLoading ? (
        <S.LoadingMemberListBox>
          <span>학생정보를 찾는 중입니다.</span>
        </S.LoadingMemberListBox>
      ) : data?.length === 0 ? (
        <S.LoadingMemberListBox>
          <span>학생정보를 찾을 수 없습니다.</span>
        </S.LoadingMemberListBox>
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
                    {item.profileImageUrl !== '' ? (
                      <Image
                        src={item.profileImageUrl}
                        alt='profileImage'
                        width='40'
                        height='40'
                      />
                    ) : (
                      <UserProfile />
                    )}
                    <div style={{ whiteSpace: 'nowrap' }}>
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
                    borderRadius='4px'
                    color='#0066ff'
                    width='3.5rem'
                    height='1.8rem'
                    fontSize='0.9rem'
                    fontWeight='500'
                    hoverBackground='#0066ff'
                    hoverBorder='none'
                    hoverColor='#ffffff'
                    onClick={() => {
                      addMembers(item)
                    }}
                    disabled={item.useStatus === 'AVAILABLE' ? false : true}
                  >
                    선택
                  </Button>
                </S.MemberBox>
              ))}
        </S.MemberListBox>
      )}
      <S.ButtonContainer>
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
      </S.ButtonContainer>
    </S.MemberSelectContainer>
  )
}

export default MemberSelect
