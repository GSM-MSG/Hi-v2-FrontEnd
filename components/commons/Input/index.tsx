import React, { forwardRef, memo } from 'react'
import { InputPropsType } from '@/types/components'
import * as S from './style'

function Input(
  { width, height, border, borderRadius, focus, ...rest }: InputPropsType,
  ref: any
) {
  return (
    <S.Input
      ref={ref}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      focus={focus}
      {...rest}
    />
  )
}

export default memo(forwardRef(Input))
