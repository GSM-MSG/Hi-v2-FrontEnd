import { ButtonPropsType } from '@/types'
import styled from '@emotion/styled'

export const Button = styled.button<ButtonPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => (!props.disabled ? props.color : '#b1b1b1')};
  background: ${(props) => (!props.disabled ? props.background : '#ffffff')};
  border: ${(props) => (!props.disabled ? props.border : '1px solid #b1b1b1')};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background: ${(props) => !props.disabled && props.hoverBackground};
    border: ${(props) => !props.disabled && props.hoverBorder};
    color: ${(props) => !props.disabled && props.hoverColor};
  }
  text-decoration: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`
