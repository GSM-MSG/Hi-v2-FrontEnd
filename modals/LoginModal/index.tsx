import * as S from './style'
import { GauthLoginButton } from '@msg-team/gauth-react'
import '@msg-team/gauth-react/dist/index.css'
import { Portal } from '@/components'
import { useModal } from '@/hooks'
import { HiLoginLogo, XMark } from '@/assets'

export default function LoginModal() {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.SVGContainer onClick={closeModal}>
          <XMark />
        </S.SVGContainer>
        <S.ModalContent>
          <S.LoginTitle>
            <HiLoginLogo />
            <p>홈베이스 예약을 더욱 간편하게</p>
          </S.LoginTitle>
          <GauthLoginButton />
        </S.ModalContent>
      </S.ModalContainer>
    </Portal>
  )
}
