import * as S from './style'
import { Portal } from '@/components'
import { useModal } from '@/hooks'
import { HiLoginLogo, XMark } from '@/assets'
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
          <div
            style={{ background: 'blue', color: 'white', width: '200px', height: '200px' }}
            onClick={() => router.replace(gauthLoginUri)}
          />
        </S.ModalContent>
      </S.ModalContainer>
    </Portal>
  )
}
