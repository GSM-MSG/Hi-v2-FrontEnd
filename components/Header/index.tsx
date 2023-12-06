import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useEffect, useState } from 'react'
import { HasLogin } from '@/atoms/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import useModal from '@/hooks/useModal'
import LoginModal from '@/modals/LoginModal'
import useGetRole from '@/hooks/useGetRole'
import { headerMenuList } from '@/constants/headerObject'
import useLogout from '@/hooks/useLogout'
import { toast } from 'react-toastify'

function Header() {
  const router = useRouter()
  const hasLogin = useRecoilValue<boolean>(HasLogin)
  const [loginText, setLoginText] = useState<'로그아웃' | '로그인'>('로그인')
  const { openModal } = useModal()
  const logout = useLogout()
  const { isStudent } = useGetRole()

  useEffect(() => {
    setLoginText(hasLogin ? '로그아웃' : '로그인')
  }, [hasLogin])

  return (
    <S.HeaderContainer>
      <Link href='/'>
        <SVG.HiLogo />
      </Link>
      <S.MenuListBox is_admin={!isStudent}>
        {!isStudent
          ? headerMenuList.map((menu) => (
              <li
                key={menu.id}
                className={router.pathname === menu.link ? 'choice' : ''}
                onClick={() =>
                  hasLogin
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
                  hasLogin
                    ? router.push(`${menu.link}`)
                    : toast.info('로그인 후에 이용해주세요')
                }
              >
                {menu.text}
              </li>
            ))}
      </S.MenuListBox>
      {hasLogin ? (
        <S.LoginBtn onClick={logout}>{loginText}</S.LoginBtn>
      ) : (
        <S.LoginBtn onClick={() => openModal(<LoginModal />)}>
          {loginText}
        </S.LoginBtn>
      )}
    </S.HeaderContainer>
  )
}

export default Header
