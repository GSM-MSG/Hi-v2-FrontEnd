import { TextareaPropsType } from '@/types/components'
import styled from '@emotion/styled'

export const Textarea = styled.textarea<TextareaPropsType>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.borderColor};
  resize: none;
  width: 100%;
  height: ${(props) => props.height};
  outline: none;
  color: #c0c0c0;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};

  &:focus {
    border: 1px solid #6c6c6c;
    color: #6c6c6c;
  }

  &::placeholder {
    color: #c0c0c0;
  }
`
