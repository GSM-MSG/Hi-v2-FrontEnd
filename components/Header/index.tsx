import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'

function Header() {
  const router = useRouter()

  return (
    <S.HeaderContainer>
      <Link href='/'>
        <SVG.HiLogo />
      </Link>
      <S.MenuListBox>
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
      <S.LoginBtn>로그인</S.LoginBtn>
    </S.HeaderContainer>
  )
}

export default Header
