import { InputHTMLAttributes } from 'react'

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
  height?: string
  border?: string
  color?: string
  borderRadius?: string
  focus?: boolean
  fontSize?: string
}
