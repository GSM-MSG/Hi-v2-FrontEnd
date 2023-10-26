import PageContainer from '../common/PageContainer'
import { useRecoilValue } from 'recoil'
import { ReservationPlace } from '@/atoms/atom'
import useFetch from '@/hooks/useFetch'
import { useEffect, useState } from 'react'
import { ReservationDataType } from '@/types/modals/ReservationData'
import ReservationTableItem from './ReservationTableItem'
import * as S from './style'
import useModal from '@/hooks/useModal'
import PlaceSelect from '@/modals/PlaceSelect'
import Button from '../common/Button'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'

function ReservationPage() {
  const reservationPlace = useRecoilValue(ReservationPlace)
  const { fetch, data } = useFetch<ReservationDataType[]>({
    url: `/homebase?period=${reservationPlace.period}&floor=${reservationPlace.floor}`,
    method: 'get',
  })

  const today: Date = new Date()

  const { fetch: deleteTable } = useFetch({
    url: '/reservation/kill-all',
    method: 'delete',
    successMessage: '예약 테이블을 모두 삭제했습니다.',
  })

  const { fetch: fetchRole, data: roleDate } = useFetch<GetRoleTypes>({
    url: '/user/my-role',
    method: 'get',
  })

  const [arr, setArr] = useState([1, 2, 3, 4, 5])

  const { openModal } = useModal()

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  useEffect(() => {
    ;(async () => await fetchRole())()
  }, [fetchRole])

  useEffect(() => {
    setArr([1, 2, 3, 4, 5])
    setArr((prev: any) =>
      prev.map(
        (e: any) => data?.find((obj) => obj.reservationNumber === e) || e
      )
    )
  }, [data])

  return (
    <PageContainer paddingTop='8vh' paddingBottom='5vh' background='#ffffff'>
      <S.ReservationTitleBox>
        <S.ReservationTitle>
          <h2>예약현황</h2>
          <div>
            {today.getFullYear()}.{today.getMonth().toString().padStart(2, '0')}
            .{today.getDay().toString().padStart(2, '0')}
          </div>
          <div>
            {reservationPlace.floor}층 &#12685; {reservationPlace.period}교시
          </div>
        </S.ReservationTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            width='3.8rem'
            height='1.8rem'
            border='1px solid #0066ff'
            borderRadius='8px'
            color='#0066ff'
            fontSize='0.81rem'
            fontWeight='500'
            background='none'
            hoverBackground='#0066ff'
            hoverColor='#ffffff'
            onClick={() => openModal(<PlaceSelect />)}
          >
            상세조회
          </Button>
          {roleDate?.role.includes('ROLE_ADMIN') && (
            <Button
              width='3.8rem'
              height='1.8rem'
              border='1px solid #FF002E'
              borderRadius='8px'
              color='#FF002E'
              fontSize='0.81rem'
              fontWeight='500'
              background='none'
              hoverBackground='#FF002E'
              hoverColor='#ffffff'
              style={{ marginLeft: '0.3rem' }}
              onClick={async () => await deleteTable()}
            >
              전체삭제
            </Button>
          )}
        </div>
      </S.ReservationTitleBox>
      <S.ReservationTableContainer>
        {arr.slice(0, reservationPlace.floor === 3 ? 5 : 4).map((item, idx) => (
          <ReservationTableItem
            key={idx}
            item={item}
            reservationNumber={idx + 1}
          />
        ))}
      </S.ReservationTableContainer>
    </PageContainer>
  )
}

export default ReservationPage
