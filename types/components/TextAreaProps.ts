import { ChangeEvent } from 'react'

export interface TextareaPropsType {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  height: string
  borderColor?: string
  placeholder?: string
  fontSize?: string
  margin?: string
  name?: string
}
