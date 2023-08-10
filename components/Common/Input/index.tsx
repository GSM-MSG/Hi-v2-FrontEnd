import { InputPropsType } from '@/types/components/InputPropsType'
import * as S from './style'

export default function Input(props: InputPropsType) {
  return (
    <S.Input
      width={props.width}
      height={props.height}
      border={props.border}
      borderRadius={props.borderRadius}
      placeholder={props.placeholder}
    />
  )
}
