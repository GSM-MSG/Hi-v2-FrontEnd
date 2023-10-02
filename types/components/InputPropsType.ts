export interface InputPropsType {
  width?: string
  height?: string
  border?: string
  padding?: string
  color?: string
  borderRadius?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
  focus?: boolean
  autoComplete?: string
  disabled?: boolean
}
