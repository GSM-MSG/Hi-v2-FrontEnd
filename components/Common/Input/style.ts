import { InputPropsType } from '@/types/components/InputPropsType'
import styled from '@emotion/styled'

export const Input = styled.input<InputPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  outline: none;

  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`
