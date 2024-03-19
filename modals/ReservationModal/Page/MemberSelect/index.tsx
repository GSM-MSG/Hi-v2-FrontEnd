import { get, userQueryKeys, userUrl } from '@/apis'
import { SearchIcon, UserProfile, XMark } from '@/assets'
import { ModalPage, ShowMembers, TeamMembers } from '@/atoms'
import {
  Button,
  Input,
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components'
import { useGetRole, useModal } from '@/hooks'
import { UserItemType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './style'

function MemberSelect() {
  const setModalPage = useSetRecoilState(ModalPage)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)
  const [showMembers, setShowMembers] = useRecoilState(ShowMembers)
  const [member, setMember] = useState<string>('')
  const { closeModal } = useModal()

  const { data, refetch, isLoading } = useQuery<AxiosResponse<UserItemType[]>>({
    queryKey: userQueryKeys.searchStudent(),
    queryFn: () => get(userUrl.searchStudent(member)),
  })
  const { userId } = useGetRole()

  useEffect(() => {
    if (!member.trim()) return
    const delayFetch = setTimeout(() => {
      refetch()
    }, 1000)
    return () => clearTimeout(delayFetch)
  }, [member, refetch])

  const addMembers = (member: UserItemType) => {
    if (teamMembers.includes(member.userId)) {
      return toast.warning('이미 포함된 멤버입니다')
    } else if (member.userId === userId) {
      return toast.warning('자신을 제외한 멤버를 선택해주세요')
    }
    setShowMembers((prev) => [...prev, member])
    setTeamMembers((prev) => [...prev, member.userId])
    setMember('')
  }

  const deleteMembers = (member: UserItemType) => {
    const filteredShowMembers = showMembers.filter((prev) => prev !== member)
    const filteredTeamMembers = teamMembers.filter(
      (prev) => prev !== member.userId
    )

    setShowMembers(filteredShowMembers)
    setTeamMembers(filteredTeamMembers)
    setMember('')
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
          height='28px'
          border='none'
          autoComplete='new-password'
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />
        {member.length > 0 && (
          <div className='cancelIcon' onClick={() => setMember('')}>
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
      ) : data?.data.length === 0 ? (
        <S.LoadingMemberListBox>
          <span>학생정보를 찾을 수 없습니다.</span>
        </S.LoadingMemberListBox>
      ) : (
        <S.MemberListBox>
          {member.trim() &&
            data?.data
              .sort((a, b) => {
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
                        width='36'
                        height='36'
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
                    fontSize='14px'
                    fontWeight='500'
                    hoverBackground='#0066ff'
                    hoverBorder='none'
                    hoverColor='#ffffff'
                    onClick={() => {
                      addMembers(item)
                    }}
                    disabled={item.useStatus === 'AVAILABLE' ? false : true}
                  >
                    <span>선택</span>
                  </Button>
                </S.MemberBox>
              ))}
        </S.MemberListBox>
      )}
      <S.ButtonContainer>
        <Button
          width='112px'
          height='52px'
          background='none'
          color='#0066ff'
          fontSize='16px'
          fontWeight='600'
          lineHeight='28px'
          borderRadius='8px'
          border='1px solid #0066ff'
          onClick={closeModal}
        >
          돌아가기
        </Button>
        <Button
          width='240px'
          height='52px'
          background='#0066ff'
          color='#ffffff'
          fontSize='16px'
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
