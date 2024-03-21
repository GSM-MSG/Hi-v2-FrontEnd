import { ButtonHTMLAttributes } from 'react'

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  width?: string
  height?: string
  fontSize?: string
  lineHeight?: string
  fontWeight?: string
  color?: string
  background?: string
  border?: string
  borderRadius?: string
  hoverBackground?: string
  hoverBorder?: string
  hoverColor?: string
}
