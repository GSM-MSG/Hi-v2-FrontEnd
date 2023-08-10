import * as S from './style'
import { TextareaPropsType } from '@/types/components/TextAreaProps'

export default function Textarea(props: TextareaPropsType) {
  return (
    <S.Textarea
      height={props.height}
      borderColor={props.borderColor}
      placeholder={props.placeholder}
      fontSize={props.fontSize}
      margin={props.margin}
    />
  )
}
