import { InputProps } from '@/types/components'
import styled from '@emotion/styled'

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding-top: 2px;
  padding-left: 14px;
  color: #0B041E;
  outline: none;
  ${({theme}) => theme.typography.body1.regular};

  &:focus {
    color: ${({ focus, theme }) => focus && theme.color.Grayscale.gray07};
    border: ${({ focus, theme }) =>
      focus && `1px solid ${theme.color.Grayscale.gray07}`};
  }

  &::placeholder {
    ${({ theme }) => theme.typography.body1.regular};
    color: ${({ theme }) => theme.color.Grayscale.gray04};
  }

  &:disabled {
    background: none;
  }
`
