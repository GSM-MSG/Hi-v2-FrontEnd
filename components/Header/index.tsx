import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'

function Header() {
  return (
    <S.HeaderContainer>
      <Link href='/'>
        <SVG.HiLogo />
      </Link>
      <S.MenuListBox>
        <li>
          <Link href='/'>홈</Link>
        </li>
        <li>
          <Link href='/notice'>공지</Link>
        </li>
        <li>
          <Link href='/reservation'>예약</Link>
        </li>
      </S.MenuListBox>
      <S.LoginBtn>로그인</S.LoginBtn>
    </S.HeaderContainer>
  )
}

export default Header
