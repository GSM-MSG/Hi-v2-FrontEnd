import { UserPage } from '@/components'
import { NextSeo } from 'next-seo'

export default function user() {
  return (
    <>
      <NextSeo title='학생정보' />
      <UserPage />
    </>
  )
}
