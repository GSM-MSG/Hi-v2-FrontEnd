import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'
import Login from '../Login'
import { useEffect, useState } from 'react'
import { HasLogin, IsModal } from '@/atoms/atom'
import { useRecoilState } from 'recoil'
import useFetch from '@/hooks/useFetch'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'

function Header() {
  const { fetch, data } = useFetch<GetRoleTypes>({
    url: 'user/my-role',
    method: 'get',
  })
  const router = useRouter()
  const [scroll, setScroll] = useState(0)
  const [isModal, setIsModal] = useRecoilState(IsModal)
  const [loginText, setLoginText] = useState('')
  const [hasLogin, setHasLogin] = useRecoilState(HasLogin)

  useEffect(() => {
    setLoginText(hasLogin ? '로그아웃' : '로그인')

    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasLogin])

  useEffect(() => {
    fetch()
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
      <S.MenuListBox
        scroll={scroll}
        pathname={router.pathname}
        is_role={data?.role.includes('ROLE_ADMIN')}
      >
        <li>
          <Link
            href='/'
            className={router.pathname.includes('/home') ? 'choice' : ''}
          >
            홈
          </Link>
        </li>
        <li>
          <Link
            href='/notice'
            className={router.pathname.includes('/notice') ? 'choice' : ''}
          >
            공지
          </Link>
        </li>
        <li>
          <Link
            href='/reservation'
            className={router.pathname.includes('/reservation') ? 'choice' : ''}
          >
            예약
          </Link>
        </li>
        {data?.role?.includes('ROLE_ADMIN') && (
          <li>
            <Link
              href='/user'
              className={router.pathname.includes('/user') ? 'choice' : ''}
            >
              학생정보
            </Link>
          </li>
        )}
      </S.MenuListBox>
      {hasLogin ? (
        <S.LoginBtn
          scroll={scroll}
          pathname={router.pathname}
          onClick={() => {
            setHasLogin(false)
            localStorage.clear()
          }}
        >
          {loginText}
        </S.LoginBtn>
      ) : (
        <S.LoginBtn
          scroll={scroll}
          pathname={router.pathname}
          onClick={() => {
            setIsModal(true)
          }}
        >
          {loginText}
        </S.LoginBtn>
      )}
      {isModal && <Login />}
    </S.HeaderContainer>
  )
}

export default Header
