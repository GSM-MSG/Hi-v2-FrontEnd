import { ButtonHTMLAttributes } from 'react'

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  width?: string
  height?: string
  fontSize?: string
  color?: string
  background?: string
  border?: string
  borderRadius?: string
  fontWeight?: string
  hoverBackground?: string
  hoverBorder?: string
  hoverColor?: string
}
