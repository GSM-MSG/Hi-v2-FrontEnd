import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Login from '../Login'
import { useEffect, useState } from 'react'
import { LoginModal } from '@/apis/atoms/atom'
import { useRecoilState } from 'recoil'

function Header() {
  const router = useRouter()
  const [scroll, setScroll] = useState(0)
  const [loginModal, setLoginModal] = useRecoilState(LoginModal)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function showModal() {
    setLoginModal((prev) => !prev)
  }

  return (
    <S.HeaderContainer scroll={scroll}>
      <Link href='/'>
        {scroll === 0 ? <SVG.HiWhiteLogo /> : <SVG.HiLogo />}
      </Link>
      <S.MenuListBox scroll={scroll}>
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
      <S.LoginBtn scroll={scroll} onClick={showModal}>
        로그인
      </S.LoginBtn>
      {loginModal && <Login />}
    </S.HeaderContainer>
  )
}

export default Header
