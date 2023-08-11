import * as SVG from '@/assets/svg'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/Common/Modal/Title'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ModalPage } from '@/atoms/atom'
import * as S from './style'
import { useSetRecoilState } from 'recoil'
import Button from '@/components/Common/Button'
import useFetch from '@/hooks/useFetch'

interface UserListType {
  userId: string
  name: string
  grade: number
  classNum: number
  number: number
}

function MemberSelection() {
  const setModalPage = useSetRecoilState(ModalPage)
  const form = useForm({ defaultValues: { member: '' } })
  const { register, watch, setValue } = form
  const { fetch, data } = useFetch<UserListType[]>({
    url: `/user/search?keyword=${watch('member')}`,
    method: 'get',
  })

  useEffect(() => {
    if (!watch('member').trim()) return

    const delayFetch = setTimeout(() => {
      fetch()
    }, 200)

    return () => clearTimeout(delayFetch)
  }, [fetch, watch])

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
      <div className='searchIcon'>
        <SVG.SearchIcon />
      </div>
      {watch('member').length > 0 && (
        <div className='closeIcon' onClick={() => setValue('member', '')}>
          <SVG.SmallXMark />
        </div>
      )}
      <S.Input placeholder='팀원을 검색하세요.' {...register('member')} />
      <S.MemberListBox>
        {watch('member')?.trim() &&
          data
            ?.sort((a, b) => {
              const aStudentNum = parseInt(
                `${a.grade}${a.classNum}${a.number.toString().padStart(2, '0')}`
              )
              const bStudentNum = parseInt(
                `${b.grade}${b.classNum}${b.number.toString().padStart(2, '0')}`
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
                >
                  선택
                </Button>
              </S.MemberBox>
            ))}
      </S.MemberListBox>
      <Button
        width='100%'
        height='3rem'
        background='#0066ff'
        color='#ffffff'
        fontSize='1rem'
        fontWeight='500'
        border='none'
        borderRadius='8px'
        onClick={() => setModalPage(2)}
      >
        다음으로
      </Button>
    </S.MemberSelectionContainer>
  )
}

export default MemberSelection
