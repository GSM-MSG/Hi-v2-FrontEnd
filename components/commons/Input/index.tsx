import React, { forwardRef, memo } from 'react'
import { InputProps } from '@/types'
import * as S from './style'

function Input(
  {
    width,
    height,
    border,
    borderRadius,
    focus,
    ...rest
  }: InputProps,
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
      maxLength={4}
      {...rest}
    />
  )
}

export default memo(forwardRef(Input))
