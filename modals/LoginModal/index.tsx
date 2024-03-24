import * as S from './style'
import { Portal } from '@/components'
import { useModal } from '@/hooks'
import { GAuthLogo, HiLoginLogo, XMark } from '@/assets'
import { useRouter } from 'next/router'
import { gauthLoginUri } from '@/libs'

export default function LoginModal() {
  const { closeModal } = useModal()
  const router = useRouter()

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
          <S.GAuthLoginButton onClick={() => router.replace(gauthLoginUri)}>
            <GAuthLogo />
            Sign in with GAuth
          </S.GAuthLoginButton>
        </S.ModalContent>
      </S.ModalContainer>
    </Portal>
  )
}
