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
    padding: 0 8vw;
  }
`

export const MenuListBox = styled.ul<{ is_admin?: boolean }>`
  list-style: none;
  width: ${({ is_admin }) => (is_admin ? '20rem' : '15rem')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;

  a {
    text-decoration: none;
    color: #191919;
    font-weight: 400;
  }

  .choice {
    color: #000000;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.95rem;
    width: 12rem;
  }
`

export const LoginBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  background: #0066ff;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`
