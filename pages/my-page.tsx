import { MyPage } from '@/components'
import { NextSeo } from 'next-seo'

export default function user() {
  return (
    <>
      <NextSeo title='마이페이지' />
      <MyPage />
    </>
  )
}
