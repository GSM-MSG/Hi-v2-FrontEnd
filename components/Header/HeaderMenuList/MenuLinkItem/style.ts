import styled from '@emotion/styled'

export const MenuLink = styled.li<{ isSame: boolean }>`
  ${({ theme, isSame }) =>
    isSame ? theme.typography.h5.semibold : theme.typography.h5.regular};
  font-size: 16px;
  color: ${({ theme, isSame }) =>
    isSame ? theme.color.Grayscale.gray10 : theme.color.black};
  cursor: pointer;
`
