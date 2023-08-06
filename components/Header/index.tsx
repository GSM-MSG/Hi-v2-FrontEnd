import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useEffect, useState } from 'react'

function Header() {
  const router = useRouter()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.HeaderContainer scroll={scroll} pathname={router.pathname}>
      <Link href='/'>
        {router.pathname === '/' ? (
          scroll === 0 ? (
            <SVG.HiWhiteLogo />
          ) : (
            <SVG.HiLogo />
          )
        ) : (
          <SVG.HiLogo />
        )}
      </Link>
      <S.MenuListBox scroll={scroll} pathname={router.pathname}>
        <li>
          <Link href='/' className={router.pathname === '/' ? 'choice' : ''}>
            홈
          </Link>
        </li>
        <li>
          <Link
            href='/notice'
            className={router.pathname === '/notice' ? 'choice' : ''}
          >
            공지
          </Link>
        </li>
        <li>
          <Link
            href='/reservation'
            className={router.pathname === '/reservation' ? 'choice' : ''}
          >
            예약
          </Link>
        </li>
      </S.MenuListBox>
      <S.LoginBtn
        scroll={scroll}
        pathname={router.pathname}
        onClick={() => console.log(window.scrollY)}
      >
        로그인
      </S.LoginBtn>
    </S.HeaderContainer>
  )
}

export default Header
