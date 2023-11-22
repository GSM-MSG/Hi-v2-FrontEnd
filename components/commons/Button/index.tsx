import { ButtonPropsType } from '@/types/components'
import * as S from './style'
import { memo } from 'react'

function Button({
  children,
  width,
  height,
  fontSize,
  color,
  background,
  border,
  borderRadius,
  fontWeight,
  hoverBackground,
  hoverBorder,
  hoverColor,
  ...rest
}: ButtonPropsType) {
  return (
    <S.Button
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      hoverBackground={hoverBackground}
      hoverBorder={hoverBorder}
      hoverColor={hoverColor}
      {...rest}
    >
      {children}
    </S.Button>
  )
}

export default memo(Button)
