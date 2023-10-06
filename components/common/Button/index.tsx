import { ButtonPropsType } from '@/types/components/ButtonPropsType'
import * as S from './style'

export default function Button(props: ButtonPropsType) {
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
      hoverBorder={props.hoverBorder}
      hoverColor={props.hoverColor}
    >
      {props.children}
    </S.Button>
  )
}
