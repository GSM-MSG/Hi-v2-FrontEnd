import styled from '@emotion/styled'

export const MenuListContainer = styled.ul<{ isManager: boolean }>`
  list-style: none;
  width: ${({ isManager }) => (isManager ? '20rem' : '15rem')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`
