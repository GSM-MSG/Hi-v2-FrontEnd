import { memo } from 'react'
import { TextareaProps } from '@/types'
import * as S from './style'

function Textarea({
  height,
  fontSize,
  margin,
  ...rest
}: TextareaProps) {
  return (
    <S.Textarea
      height={height}
      fontSize={fontSize}
      margin={margin}
      {...rest}
    />
  )
}

export default memo(Textarea)
