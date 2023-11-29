import { ChangeEvent, TextareaHTMLAttributes } from 'react'

export interface TextareaPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height: string
  borderColor?: string
  placeholder?: string
  fontSize?: string
  margin?: string
}
