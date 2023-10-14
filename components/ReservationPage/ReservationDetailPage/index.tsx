import PageContainer from '@/components/common/PageContainer'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ReservationDetailPage() {
  const router = useRouter()
  console.log(router)
  const { fetch, data } = useFetch({
    url: `/reservation/${router.query.reservationId}`,
    method: 'get',
  })

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  return <PageContainer>test</PageContainer>
}
