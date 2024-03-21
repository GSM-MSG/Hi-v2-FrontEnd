import { ButtonPropsType } from '@/types'
import { memo } from 'react'
import * as S from './style'

function Button({
  children,
  width,
  height,
  fontSize,
  lineHeight,
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
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
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
