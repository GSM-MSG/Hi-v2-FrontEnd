import * as S from './style'
import { TextareaPropsType } from '@/types/components/TextAreaProps'

export default function Textarea(props: TextareaPropsType) {
  return (
    <S.Textarea
      value={props.value}
      height={props.height}
      borderColor={props.borderColor}
      placeholder={props.placeholder}
      fontSize={props.fontSize}
      margin={props.margin}
      onChange={props.onChange}
      name={props.name}
    />
  )
}
