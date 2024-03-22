import { IsModal } from '@/atoms'
import { Footer, Header } from '@/components'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { useRecoilValue } from 'recoil'

export default function Layout({ children }: { children: React.ReactNode }) {
  const isModal = useRecoilValue(IsModal)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
      {isModal && <>{isModal}</>}
    </ThemeProvider>
  )
}
