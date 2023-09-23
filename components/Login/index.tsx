import * as S from './style'
import * as SVG from '@/assets/svg'
import { GauthLoginButton } from '@msg-team/gauth-react'
import { useState } from 'react'
import '@msg-team/gauth-react/dist/index.css'
import { IsModal } from '@/atoms/atom'
import Portal from '../Portal'
import { useSetRecoilState } from 'recoil'

export default function Login() {
  const setIsModal = useSetRecoilState<boolean>(IsModal)

  const onClose = () => {
    setIsModal(false)
  }

  return (
    <Portal onClose={onClose}>
      <S.ModalContainer>
        <S.SVGConatiner onClick={() => setIsModal(false)}>
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
    </Portal>
  )
}
