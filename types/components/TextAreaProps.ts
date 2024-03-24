import { ChangeEvent, TextareaHTMLAttributes } from 'react'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height: string
  placeholder?: string
  fontSize?: string
  margin?: string
}
