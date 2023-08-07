import * as SVG from '@/assets/svg'
import { Button } from '@/components/Common/Modal/Button'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/Common/Modal/Title'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ModalPage } from '@/atoms/atom'
import * as S from './style'
import { useSetRecoilState } from 'recoil'

function MemberSelection() {
  const setModalPage = useSetRecoilState(ModalPage)
  const [dummy, setDummy] = useState([
    { studentNum: 2405, name: '김하온' },
    { studentNum: 2405, name: '서무지' },
    { studentNum: 2405, name: '이운린' },
    { studentNum: 2405, name: '김희망' },
  ])
  const form = useForm({ defaultValues: { member: '' } })

  const { register, watch, setValue } = form

  return (
    <S.MemberSelectionContainer>
      <TitleBox>
        <Title>팀원선택</Title>
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
        {dummy
          ?.filter((i) => i.name.includes(watch('member')))
          .map((item, idx) => (
            <S.MemberBox key={idx}>
              <S.InfoBox>
                <SVG.UserProfile />
                <span>
                  {item.studentNum} {item.name}
                </span>
              </S.InfoBox>
              <S.SelectButton>선택</S.SelectButton>
            </S.MemberBox>
          ))}
      </S.MemberListBox>
      <Button onClick={() => setModalPage(2)}>다음</Button>
    </S.MemberSelectionContainer>
  )
}

export default MemberSelection
