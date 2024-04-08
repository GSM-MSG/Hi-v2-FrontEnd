import { ReservationPage } from '@/components'
import { NextSeo } from 'next-seo'

export default function Reservation() {
  return (
    <>
      <NextSeo title='예약페이지' />
      <ReservationPage />
    </>
  )
}
