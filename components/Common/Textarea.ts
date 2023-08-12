import styled from '@emotion/styled'

interface TextareaProps {
  height: number
}

export const Textarea = styled.textarea<TextareaProps>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #b1b1b1;
  resize: none;
  width: 100%;
  height: ${({ height }) => height && height + 'px'};
  outline: none;
  color: #6c6c6c;
  font-size: 1rem;

  &::placeholder {
    color: #b1b1b1;
  }
`
