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
    color: ${({ focus, theme }) => focus && theme.color.Grayscale.gray07};
    border: ${({ focus, theme }) =>
      focus && `1px solid ${theme.color.Grayscale.gray07}`};
  }

  &::placeholder {
    ${({ theme }) => theme.typography.body1.regular};
    color: ${({ theme }) => theme.color.Grayscale.gray04};
  }
`
