import NextButton from './NextButton'
import PrevButton from './PrevButton'
import * as S from './style'

export default function ButtonContainer() {
  return (
    <S.ButtonContainer>
      <PrevButton />
      <NextButton />
    </S.ButtonContainer>
  )
}
