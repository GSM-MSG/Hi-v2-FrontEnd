import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useEffect, useState } from 'react'
import { HasLogin } from '@/atoms/atom'
import { useRecoilState } from 'recoil'
import useFetch from '@/hooks/useFetch'
import { GetRoleTypes } from '@/types/components/GetRoleTypes'
import useModal from '@/hooks/useModal'
import LoginModal from '../../modals/LoginModal'

function Header() {
  const { fetch, data } = useFetch<GetRoleTypes>({
    url: 'user/my-role',
    method: 'get',
  })

  const router = useRouter()
  const [loginText, setLoginText] = useState<string>('')
  const [hasLogin, setHasLogin] = useRecoilState<boolean>(HasLogin)
  const { openModal } = useModal()

  useEffect(() => {
    setLoginText(hasLogin ? '로그아웃' : '로그인')
  }, [hasLogin])

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  return (
    <S.HeaderContainer>
      <Link href='/'>
        <SVG.HiLogo />
      </Link>
      <S.MenuListBox
        is_admin={data?.role.includes('ROLE_ADMIN' || 'ROLE_TEACHER')}
      >
        <li>
          <Link href='/' className={router.pathname === '/' ? 'choice' : ''}>
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
        <li>
          <Link
            href='/my-page'
            className={router.pathname.includes('/my-page') ? 'choice' : ''}
          >
            마이페이지
          </Link>
        </li>
        {data?.role.includes('ROLE_ADMIN' || 'ROLE_TEACHER') && (
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
