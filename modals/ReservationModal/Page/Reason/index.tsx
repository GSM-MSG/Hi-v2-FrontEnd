import {
  ModalPage,
  ReasonText,
  ReservationPlace,
  TeamMembers,
} from '@/atoms/atom'
import Button from '@/components/commons/Button'
import {
  PageToggleBox,
  SubTitle,
  Title,
  TitleBox,
} from '@/components/commons/Modal/Title'
import Textarea from '@/components/commons/Textarea'
import useFetch from '@/hooks/useFetch'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'

function Reason({
  reservationNumber,
  isModify,
  reservationId,
}: {
  reservationNumber: number
  isModify: boolean
  reservationId: string | undefined
}) {
  const setModalPage = useSetRecoilState(ModalPage)
  const reservationPlace = useRecoilValue(ReservationPlace)

  const [reasonText, setReasonText] = useRecoilState(ReasonText)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)

  const { fetch } = useFetch({
    url: `/homebase?floor=${reservationPlace.floor}&period=${reservationPlace.period}`,
    method: 'post',
    onSuccess: () => {
      setModalPage(3)
    },
    successMessage: '예약이 완료되었습니다.',
    errorMessage: {
      401: '잘못된 유저정보입니다.',
      403: '예약이 불가능한 상태입니다.',
    },
  })

  const { fetch: updateTable } = useFetch({
    url: `/reservation/${reservationId}`,
    method: 'patch',
    onSuccess: () => {
      setModalPage(3)
    },
    successMessage: '예약 테이블을 수정했습니다',
  })

  const { fetch: fetchRole, data: roleData } = useFetch<GetRoleTypes>({
    url: '/user/my-page',
    method: 'get',
  })

  useEffect(() => {
    ;(async () => await fetchRole())()
    setTeamMembers((prev) => [...prev, roleData?.userId || ''])
  }, [fetchRole, roleData?.userId, setTeamMembers])

  const onReserve = async () => {
    const filteredTeam = teamMembers.filter(
      (member, idx) => teamMembers.indexOf(member) === idx && member.length
    )

    if (reasonText.length === 0) return toast.warning('예약 사유를 적어주세요.')
    else if (isModify) {
      await updateTable({
        users: filteredTeam,
        reason: reasonText,
      })
    } else {
      await fetch({
        users: filteredTeam,
        reason: reasonText,
        reservationNumber,
      })
    }
  }

  return (
    <S.ReasonContainer>
      <TitleBox>
        <Title>
          예약사유 <span />
        </Title>
        <PageToggleBox>
          <div />
          <div className='currentToggle' />
        </PageToggleBox>
      </TitleBox>
      <SubTitle>홈베이스를 신청하는 사유를 알려주세요.</SubTitle>
      <Textarea
        value={reasonText}
        onChange={(e) => setReasonText(e.target.value)}
        height='18rem'
        placeholder='예약 사유를 입력해주세요.'
      />
      <S.ButtonContainer>
        <Button
          width='30%'
          height='3rem'
          background='#d9d9d9'
          color='#ffffff'
          fontSize='1rem'
          borderRadius='8px'
          border='none'
          onClick={() => setModalPage(1)}
        >
          돌아가기
        </Button>
        <Button
          width='68%'
          height='3rem'
          background='#0066ff'
          color='#ffffff'
          fontSize='1rem'
          fontWeight='500'
          border='none'
          borderRadius='8px'
          onClick={onReserve}
        >
          {isModify ? '수정하기' : '예약하기'}
        </Button>
      </S.ButtonContainer>
    </S.ReasonContainer>
  )
}

export default Reason
