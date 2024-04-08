import { NoticePage } from '@/components'
import { NextSeo } from 'next-seo'

export default function notice() {
  return (
    <>
      <NextSeo title='공지페이지' />
      <NoticePage />
    </>
  )
}
