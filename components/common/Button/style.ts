import { ButtonType } from '@/types/components/ButtonType'
import styled from '@emotion/styled'

export const Button = styled.button<ButtonType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  font-weight: ${(props) => props.fontWeight};
  &:hover {
    background: ${(props) => props.hoverBackground};
    border: ${(props) => props.hoverBorder};
    color: ${(props) => props.hoverColor};
  }
  text-decoration: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`
