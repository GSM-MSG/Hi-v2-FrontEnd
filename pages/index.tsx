import { HomePage, SEO } from '@/components'
import { usePostLogin } from '@/hooks'

export default function Home() {
  usePostLogin()
  return (
    <>
      <SEO />
      <HomePage />
    </>
  )
}
