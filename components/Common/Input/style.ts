import { InputPropsType } from '@/types/components/InputPropsType'
import styled from '@emotion/styled'

export const Input = styled.input<InputPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  color: #c0c0c0;
  outline: none;

  &:focus {
    color: ${(props) => props.focus && '#6c6c6c'};
    border: ${(props) => props.focus && '1px solid #6c6c6c'};
  }

  ::placeholder {
    color: #c0c0c0;
  }
`
