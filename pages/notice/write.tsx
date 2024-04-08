import { NoticeWritePage } from '@/components'
import { NextSeo } from 'next-seo'

export default function write() {
  return (
    <>
      <NextSeo title='공지페이지' />
      <NoticeWritePage />
    </>
  )
}
