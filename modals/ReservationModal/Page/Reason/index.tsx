import {
  homebaseQueryKeys,
  homebaseUrl,
  patch,
  post,
  reservationQueryKeys,
  reservationUrl,
} from '@/apis'
import { ModalPage, ReasonText, ReservationPlace, TeamMembers } from '@/atoms'
import {
  Button,
  PageToggleBox,
  SubTitle,
  Textarea,
  Title,
  TitleBox,
} from '@/components'
import { useGetRole } from '@/hooks'
import { ReserveModifyMutationValues, ReserveMutationValues } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ChangeEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'

function Reason({
  homeBaseNumber,
  isModify,
  reservationId,
}: {
  homeBaseNumber: number
  isModify: boolean
  reservationId: string | undefined
}) {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const setModalPage = useSetRecoilState(ModalPage)
  const [reasonText, setReasonText] = useRecoilState(ReasonText)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)

  const { mutate: reserveTable, error } = useMutation<
    void,
    AxiosError,
    ReserveMutationValues
  >({
    mutationKey: homebaseQueryKeys.reserve(),
    mutationFn: (reserveValues) =>
      post(
        homebaseUrl.hombaseReserve({
          period: reservationPlace.period,
          floor: reservationPlace.floor,
          homeBaseNumber,
        }),
        reserveValues
      ),
    onSuccess: () => {
      toast.success('예약이 완료되었습니다')
      setModalPage(3)
    },
    onError: (error) => {
      if (error.message === 'Network Error')
        toast.error('같은 교시에 예약하실 수 없습니다')
    },
  })

  const { mutate: updateTable } = useMutation<
    void,
    Error,
    ReserveModifyMutationValues
  >({
    mutationKey: reservationQueryKeys.modify(reservationId),
    mutationFn: (modifyValues) =>
      patch(reservationUrl.requestId(reservationId), modifyValues),
    onSuccess: () => {
      toast.success('예약테이블을 수정했습니다')
      setModalPage(3)
    },
  })
  const { userId } = useGetRole()

  useEffect(() => {
    setTeamMembers((prev) => [...prev, userId || ''])
  }, [setTeamMembers, userId])

  const onReserve = () => {
    const filteredTeam = teamMembers.filter(
      (member, idx) => teamMembers.indexOf(member) === idx && member.length
    )
    if (reasonText.length === 0) return toast.warning('예약 사유를 적어주세요')
    else if (isModify)
      updateTable({
        users: filteredTeam,
        reason: reasonText,
      })
    else
      reserveTable({
        users: filteredTeam,
        reason: reasonText,
      })
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
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setReasonText(e.target.value)
        }
        height='15.75rem'
        placeholder='사유입력(500자 이하)'
        maxLength={500}
      />
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
          onClick={() => setModalPage(1)}
        >
          돌아가기
        </Button>
        <Button
          width='240px'
          height='52px'
          background='#0066ff'
          color='#ffffff'
          fontSize='16px'
          fontWeight='600'
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
