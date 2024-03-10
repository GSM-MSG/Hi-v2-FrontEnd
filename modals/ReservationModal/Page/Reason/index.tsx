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
import { ChangeEvent, useEffect } from 'react'
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
  const reservationPlace = useRecoilValue(ReservationPlace)
  const setModalPage = useSetRecoilState(ModalPage)
  const [reasonText, setReasonText] = useRecoilState(ReasonText)
  const [teamMembers, setTeamMembers] = useRecoilState(TeamMembers)

  const { mutate } = useMutation<void, Error, ReserveMutationValues>({
    mutationKey: homebaseQueryKeys.reserve(),
    mutationFn: (reserveValues) =>
      post(
        homebaseUrl.hombase({
          period: reservationPlace.period,
          floor: reservationPlace.floor,
        }),
        reserveValues
      ),
    onSuccess: () => {
      toast.success('예약이 완료되었습니다')
      setModalPage(3)
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
      mutate({
        users: filteredTeam,
        reason: reasonText,
        reservationNumber,
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
        height='18rem'
        placeholder='사유입력'
      />
      <S.ButtonContainer>
        <Button
          width='30%'
          height='3rem'
          background='none'
          color='#0066ff'
          fontSize='1rem'
          fontWeight='700'
          borderRadius='8px'
          border='1px solid #0066ff'
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
          fontWeight='700'
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
