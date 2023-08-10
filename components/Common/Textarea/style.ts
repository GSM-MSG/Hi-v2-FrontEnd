import { TextareaPropsType } from '@/types/components/TextAreaProps'
import styled from '@emotion/styled'

export const Textarea = styled.textarea<TextareaPropsType>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ borderColor }) => borderColor};
  resize: none;
  width: 100%;
  height: ${({ height }) => height};
  outline: none;
  color: #6c6c6c;
  font-size: 1rem;
  margin-bottom: 2rem;

  &:focus {
    border: 1px solid #6c6c6c;
  }

  &::placeholder {
    color: #b1b1b1;
  }
`
