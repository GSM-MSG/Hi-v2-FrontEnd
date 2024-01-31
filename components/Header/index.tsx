import TokenManager from '@/apis/TokenManager'
import { HiLogo } from '@/assets'
import { headerMenuList } from '@/constants'
import { useGetRole, useLogout, useModal } from '@/hooks'
import { LoginModal } from '@/modals'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import * as S from './style'
import { useEffect, useState } from 'react'

function Header() {
  const router = useRouter()
  const { openModal } = useModal()
  const logout = useLogout()
  const { isStudent } = useGetRole()
  const [loginText, setLoginText] = useState<'로그인' | '로그아웃'>('로그인')
  const accessToken =
    typeof window !== 'undefined'
      ? localStorage.getItem('hi_accessToken')
      : null

  useEffect(() => {
    if (accessToken) setLoginText('로그아웃')
    else setLoginText('로그인')
  }, [accessToken])

  return (
    <S.HeaderContainer>
      <Link href='/'>
        <HiLogo />
      </Link>
      <S.MenuListBox is_admin={!isStudent}>
        {!isStudent
          ? headerMenuList.map((menu) => (
              <li
                key={menu.id}
                className={router.pathname === menu.link ? 'choice' : ''}
                onClick={() =>
                  accessToken
                    ? router.push(`${menu.link}`)
                    : toast.info('로그인 후에 이용해주세요')
                }
              >
                {menu.text}
              </li>
            ))
          : headerMenuList.slice(0, 4).map((menu) => (
              <li
                key={menu.id}
                className={router.pathname === menu.link ? 'choice' : ''}
                onClick={() =>
                  accessToken
                    ? router.push(`${menu.link}`)
                    : toast.info('로그인 후에 이용해주세요')
                }
              >
                {menu.text}
              </li>
            ))}
      </S.MenuListBox>
      <S.LoginBtn
        onClick={() => (accessToken ? logout() : openModal(<LoginModal />))}
      >
        {loginText}
      </S.LoginBtn>
    </S.HeaderContainer>
  )
}

export default Header
