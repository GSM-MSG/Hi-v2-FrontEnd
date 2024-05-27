import { ModalPage, ShowMembers } from '@/atoms'
import { Button } from '@/components'
import { toast } from 'react-toastify'
import { useRecoilValue, useSetRecoilState } from 'recoil'

export default function NextButton() {
  const setModalPage = useSetRecoilState(ModalPage)
  const showMembers = useRecoilValue(ShowMembers)

  const onNext = () => {
    if (showMembers.length < 1)
      return toast.warning('최소 1명이상의 팀원을 등록해주세요')
    setModalPage(2)
  }
  return (
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
  )
}
