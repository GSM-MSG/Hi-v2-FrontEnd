import { authQueryKeys, authUrl, del } from '@/apis'
import TokenManager from '@/apis/TokenManager'
import { HiLogo } from '@/assets'
import { headerMenuList } from '@/constants'
import { useGetRole, useModal } from '@/hooks'
import { LoginModal } from '@/modals'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

function Header() {
  const router = useRouter()
  const { openModal } = useModal()
  const { isAdmin, isTeacher } = useGetRole()
  const [loginText, setLoginText] = useState<'로그인' | '로그아웃'>('로그인')
  const tokenManager = new TokenManager()
  const { mutate } = useMutation<void, AxiosError>({
    mutationKey: authQueryKeys.logout(),
    mutationFn: () =>
      del(authUrl.auth(), {
        headers: {
          Authorization: `Bearer ${tokenManager.accessToken}`,
          RefreshToken: tokenManager.refreshToken,
        },
      }),
    onSuccess: () => {
      tokenManager.removeTokens()
      router.push('/')
    },
  })

  useEffect(() => {
    if (tokenManager.accessToken) setLoginText('로그아웃')
    else setLoginText('로그인')
  }, [tokenManager.accessToken])

  return (
    <S.HeaderContainer>
      <Link href='/'>
        <HiLogo />
      </Link>
      <S.MenuListBox is_admin={isAdmin || isTeacher}>
        {isAdmin || isTeacher
          ? headerMenuList.map((menu) => (
              <li
                key={menu.id}
                className={router.pathname === menu.link ? 'choice' : ''}
                onClick={() =>
                  tokenManager.accessToken
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
                  tokenManager.accessToken
                    ? router.push(`${menu.link}`)
                    : toast.info('로그인 후에 이용해주세요')
                }
              >
                {menu.text}
              </li>
            ))}
      </S.MenuListBox>
      <S.LoginBtn
        onClick={() =>
          tokenManager.accessToken ? mutate() : openModal(<LoginModal />)
        }
      >
        {loginText}
      </S.LoginBtn>
    </S.HeaderContainer>
  )
}

export default Header
