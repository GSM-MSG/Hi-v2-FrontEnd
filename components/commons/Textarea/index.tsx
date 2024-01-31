import { memo } from 'react'
import { TextareaPropsType } from '@/types'
import * as S from './style'

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
