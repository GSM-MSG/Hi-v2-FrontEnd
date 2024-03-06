import { InputPropsType } from '@/types/components'
import styled from '@emotion/styled'

export const Input = styled.input<InputPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding-top: 2px;
  padding-left: 14px;
  color: ${({ theme }) => theme.color.Grayscale.gray04};
  outline: none;

  &:focus {
    color: ${(props) => props.focus && '#6c6c6c'};
    border: ${(props) => props.focus && '1px solid #6c6c6c'};
  }

  &::placeholder {
    ${({ theme }) => theme.typography.body1.regular};
    color: #c0c0c0;
  }
`
