import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useEffect, useState } from 'react'
import { HasLogin } from '@/atoms/atom'
import { useRecoilState } from 'recoil'
import useModal from '@/hooks/useModal'
import LoginModal from '@/modals/LoginModal'
import useGetRole from '@/hooks/useGetRole'
import { headerMenuList } from '@/constants/headerObject'

function Header() {
  const router = useRouter()
  const [loginText, setLoginText] = useState<string>('')
  const [hasLogin, setHasLogin] = useRecoilState<boolean>(HasLogin)
  const { openModal } = useModal()

  useEffect(() => {
    setLoginText(hasLogin ? '로그아웃' : '로그인')
  }, [hasLogin])

  const { isTeacher, isAdmin } = useGetRole()

  return (
    <S.HeaderContainer>
      <Link href='/'>
        <SVG.HiLogo />
      </Link>
      <S.MenuListBox is_admin={isTeacher || isAdmin}>
        {isTeacher || isAdmin
          ? headerMenuList.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.link}
                  className={router.pathname === menu.link ? 'choice' : ''}
                >
                  {menu.text}
                </Link>
              </li>
            ))
          : headerMenuList.slice(0, 4).map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.link}
                  className={router.pathname === menu.link ? 'choice' : ''}
                >
                  {menu.text}
                </Link>
              </li>
            ))}
      </S.MenuListBox>
      {hasLogin ? (
        <S.LoginBtn
          onClick={() => {
            setHasLogin(false)
            localStorage.clear()
          }}
        >
          {loginText}
        </S.LoginBtn>
      ) : (
        <S.LoginBtn onClick={() => openModal(<LoginModal />)}>
          {loginText}
        </S.LoginBtn>
      )}
    </S.HeaderContainer>
  )
}

export default Header
