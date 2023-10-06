import { InputPropsType } from '@/types/components/InputPropsType'
import * as S from './style'
import React, { forwardRef } from 'react'

const Input = (props: InputPropsType, ref: any) => {
  return (
    <S.Input
      ref={ref}
      width={props.width}
      height={props.height}
      border={props.border}
      padding={props.padding}
      borderRadius={props.borderRadius}
      focus={props.focus}
    />
  )
}

export default forwardRef(Input)
