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
      borderRadius={props.borderRadius}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
    />
  )
}

export default forwardRef(Input)
