import { InputPropsType } from '@/types/components/InputPropsType'
import * as S from './style'
import React, { forwardRef } from 'react'

const Input = (
  {
    width,
    height,
    border,
    padding,
    borderRadius,
    focus,
    ...rest
  }: InputPropsType,
  ref: any
) => {
  return (
    <S.Input
      ref={ref}
      width={width}
      height={height}
      border={border}
      padding={padding}
      borderRadius={borderRadius}
      focus={focus}
      {...rest}
    />
  )
}

export default forwardRef(Input)
