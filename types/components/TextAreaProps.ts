export interface TextareaPropsType {
  height: string
  borderColor?: string
  placeholder?: string
  fontSize?: string
  margin?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  name?: string
}
