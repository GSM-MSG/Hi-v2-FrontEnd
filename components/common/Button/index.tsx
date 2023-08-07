import { ButtonType } from '@/types/components/ButtonType'
import * as S from './style'

export default function Button(props: ButtonType) {
  return (
    <S.Button
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      color={props.color}
      background={props.background}
      border={props.border}
      borderRadius={props.borderRadius}
      fontWeight={props.fontWeight}
      hoverBackground={props.hoverBackground}
      hoverBorder={props.hoverBackground}
      hoverColor={props.hoverColor}
      onClick={props.onClick}
    >
      {props.children}
    </S.Button>
  )
}
