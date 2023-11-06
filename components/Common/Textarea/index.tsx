import * as S from './style'
import { TextareaPropsType } from '@/types/components/TextAreaProps'
import { memo } from 'react'

function Textarea({
  height,
  borderColor,
  fontSize,
  margin,
  ...rest
}: TextareaPropsType) {
  return (
    <S.Textarea
      height={height}
      borderColor={borderColor}
      fontSize={fontSize}
      margin={margin}
      {...rest}
    />
  )
}

export default memo(Textarea)
