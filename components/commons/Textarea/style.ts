import { TextareaPropsType } from '@/types/components'
import styled from '@emotion/styled'

export const Textarea = styled.textarea<TextareaPropsType>`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.Grayscale.gray05};
  resize: none;
  width: 100%;
  height: ${(props) => props.height};
  outline: none;
  color: ${({ theme }) => theme.color.black};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  ${({ theme }) => theme.typography.body2.regular};

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.Grayscale.gray07};
    color: ${({ theme }) => theme.color.Grayscale.gray07};
  }

  &::placeholder {
    ${({ theme }) => theme.typography.body2.regular};
    color: ${({ theme }) => theme.color.Grayscale.gray04};
  }
`
