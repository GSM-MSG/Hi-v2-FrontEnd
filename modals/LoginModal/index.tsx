import * as S from './style'
import * as SVG from '@/assets/svg'
import { GauthLoginButton } from '@msg-team/gauth-react'
import '@msg-team/gauth-react/dist/index.css'
import Portal from '../../components/Portal'
import useModal from '@/hooks/useModal'

export default function LoginModal() {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.SVGConatiner onClick={closeModal}>
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
