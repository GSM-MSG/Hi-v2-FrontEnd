import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
  height?: string
  border?: string
  color?: string
  borderRadius?: string
  focus?: boolean
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
}
