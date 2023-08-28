import PageContainer from '@/components/common/PageContainer'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ReservationDetailPage() {
  const router = useRouter()
  const { fetch, data } = useFetch({
    url: `/reservation/${router.query.homebaseID}`,
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [fetch])

  return <PageContainer>힝;</PageContainer>
}
