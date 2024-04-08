import { HomePage } from '@/components'
import { usePostLogin } from '@/hooks'
import { NextSeo } from 'next-seo'

export default function Home() {
  usePostLogin()
  return (
    <>
      <NextSeo />
      <HomePage />
    </>
  )
}
