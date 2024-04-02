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
import { useDeleteReservationStatus, useGetRole, useModal } from '@/hooks'
import { UserItemType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './style'

export default function MemberSelect({ maxCapacity }: { maxCapacity: number }) {
  const setModalPage = useSetRecoilState(ModalPage)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)
  const [showMembers, setShowMembers] = useRecoilState(ShowMembers)
  const [member, setMember] = useState<string>('')
  const { closeModal } = useModal()
  const { delReserveStatus } = useDeleteReservationStatus()

  const { data, refetch, isLoading } = useQuery<AxiosResponse<UserItemType[]>>({
    queryKey: userQueryKeys.searchStudent(),
    queryFn: () => get(userUrl.searchStudent(member)),
  })
  const { userId } = useGetRole()

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
  }, [member, refetch])

  const addMembers = (member: UserItemType) => {
    if (teamMembers.includes(member.userId)) {
      return toast.warning('이미 포함된 멤버입니다')
    } else if (member.userId === userId) {
      return toast.warning('본인을 제외한 멤버를 선택해주세요')
    } else if (showMembers.length === maxCapacity - 1) {
      return toast.warning('테이블 최대 인원입니다')
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

  const onClose = () => {
    closeModal()
    delReserveStatus()
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
          disabled={showMembers.length === maxCapacity - 1 ? true : false}
          placeholder='팀원을 검색하세요.'
          width='100%'
          height='28px'
          border='none'
          autoComplete='new-password'
          value={member}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMember(e.target.value)
          }
        />
        {member.length > 0 && (
          <div className='cancelIcon' onClick={() => setMember('')}>
            <XMark />
          </div>
        )}
      </S.InputBlock>
      <S.ShowMemberListBox>
        {showMembers.map((showMember) => (
          <div key={showMember.userId}>
            <S.ShowMemberBox>
              <span>{showMember.name}</span>
              <div onClick={() => deleteMembers(showMember)}>
                <div style={{ marginTop: '0.125rem' }}>
                  <XMark width='11' height='11' />
                </div>
              </div>
            </S.ShowMemberBox>
          </div>
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
          {data?.data
            .sort((a, b) => {
              const aStudentNum = parseInt(
                `${a.grade}${a.classNum}${
                  a.number && a.number.toString().padStart(2, '0')
                }`
              )
              const bStudentNum = parseInt(
                `${b.grade}${b.classNum}${
                  b.number && b.number.toString().padStart(2, '0')
                }`
              )

              return aStudentNum - bStudentNum
            })
            .map((item) => (
              <S.MemberBox key={item.userId}>
                <S.MemeberContentsBox>
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
                  <S.InfoBox>
                    {parseInt(
                      `${item.grade}${item.classNum}${
                        item.number && item.number.toString().padStart(2, '0')
                      }`
                    )}{' '}
                    {item.name}
                  </S.InfoBox>
                </S.MemeberContentsBox>
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
          onClick={onClose}
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