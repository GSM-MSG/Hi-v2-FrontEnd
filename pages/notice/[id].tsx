import { NoticeDetailPage } from '@/components'
import { NextSeo } from 'next-seo'

export default function detail() {
  return (
    <>
      <NextSeo title='공지페이지' />
      <NoticeDetailPage />
    </>
  )
}
