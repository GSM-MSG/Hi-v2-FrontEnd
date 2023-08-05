import * as S from './style'
import * as SVG from '@/assets/svg'
import { GauthLoginButton } from '@msg-team/gauth-react'
import { useState } from 'react'
import '@msg-team/gauth-react/dist/index.css'
import { useRecoilState } from 'recoil'
import { LoginModal } from '@/apis/atoms/atom'

export default function Login() {
  const [loginModal, setLoginModal] = useRecoilState(LoginModal)

  return (
    <>
      <S.ModalBackground onClick={() => setLoginModal(false)} />
      <S.ModalContainer>
        <S.SVGConatiner onClick={() => setLoginModal(false)}>
          <SVG.XMark />
        </S.SVGConatiner>
        <S.ModalContent>
          <S.LoginTitle>
            <SVG.HiLoginLogo />
            <p>홈베이스 예약을 더욱 간편하게</p>
          </S.LoginTitle>
          <GauthLoginButton />
        </S.ModalContent>
      </S.ModalContainer>
    </>
  )
}
