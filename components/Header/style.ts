import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 3.8rem;
  padding: 0 18vw;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background: #ffffff;

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 850px) {
    padding: 0 14vw;
  }

  @media screen and (max-width: 670px) {
    padding: 0 10vw;
  }

  @media screen and (max-width: 450px) {
    padding: 0 5vw;
  }
`

export const MenuListBox = styled.ul<{ is_admin?: boolean }>`
  list-style: none;
  width: ${({ is_admin }) => (is_admin ? '20rem' : '15rem')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  li {
    ${({ theme }) => theme.typography.h5.regular};
    font-size: 16px;
    color: ${({ theme }) => theme.color.Grayscale.gray10};
    cursor: pointer;
  }

  .choice {
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
  }
`

export const LoginBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.8rem 0.3rem 0.8rem;
  cursor: pointer;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typography.body1.semibold};
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`
